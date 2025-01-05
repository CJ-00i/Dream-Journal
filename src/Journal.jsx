import React, { useState, useEffect, useRef } from "react";
import cloud1 from "../Clouds/cloud1.jpg";
import cloud2 from "../Clouds/cloud2.jpg";
import cloud3 from "../Clouds/cloud3.jpg";
import cloud4 from "../Clouds/cloud4.jpg";
import cloud6 from "../Clouds/cloud6.jpg";
import cloud7 from "../Clouds/cloud7.jpg";
import cloud8 from "../Clouds/cloud8.jpg";
import cloud from "d3-cloud";
import * as d3 from "d3";
import nlp from "compromise";

function Journal({ background, setBackground }) {
  const initialProduct = JSON.parse(window.localStorage.getItem("data")) || {
      title: "",
      date: "",
      category: "",
      content: "",
      background: "",
      fontColor: "#ffffff", // Default font color
  };

  const [dropDown, setDropDown] = useState(false);
  const [selected, setSelected] = useState(initialProduct.category);
  const [product, setProduct] = useState(initialProduct);
  const [text, setText] = useState(initialProduct.content);
  const [fontColor, setFontColor] = useState(initialProduct.fontColor);

  const categories = [
      "Lucid Dream",
      "Nightmare",
      "Recurring",
      "Memories",
      "Relationships",
      "Fantasy",
      "Symbolic",
  ];

  useEffect(() => {
      window.localStorage.setItem("data", JSON.stringify(product));
  }, [product]);

  setBackground(initialProduct.background)

  const wordCloudRef = useRef(null);

  const drop = () => {
      setDropDown((prev) => !prev);
  };

  const categoryClicked = (category, index) => {
      setSelected(category);
      setProduct((prevProduct) => ({
          ...prevProduct,
          category,
          background: index + 1,
      }));
      setDropDown(false);
      setBackground(index + 1);
  };

  const handleClear = () => {
      setProduct({
          title: "",
          date: "",
          category: "",
          content: "",
          background: "",
          fontColor: "#ffffff",
      });
      setText("");
      setSelected("");
      setFontColor("#ffffff");
      setBackground(1)
  };

  const getProductImage = (background) => {
      switch (background) {
          case 1:
              return cloud1;
          case 2:
              return cloud2;
          case 3:
              return cloud3;
          case 4:
              return cloud4;
          case 5:
              return cloud6;
          case 6:
              return cloud7;
          case 7:
              return cloud8;
          default:
              return cloud1;
      }
  };

  const productCloud = getProductImage(product.background);

  const extractNouns = (text) => {
      const doc = nlp(text);
      let nouns = doc.nouns().out("array");

      const stopWords = [
          "the", "and", "a", "of", "to", "in", "on", "for", "with", "at", "as", 
          "by", "an", "it", "this", "that", "or", "but", "is", "are", "was", "were", 
          "be", "been", "being", "have", "has", "had", "having", "do", "does", "did", "doing",
      ];

      return nouns
          .filter((word) => !stopWords.includes(word.toLowerCase()))
          .map((word) => word.replace(/[.,!?;()]/g, ""));
  };

  const generateWordCloud = () => {
      const nouns = extractNouns(text);

      const wordFrequency = nouns.reduce((acc, word) => {
          acc[word] = (acc[word] || 0) + 1;
          if (acc[word] > 5) acc[word] = 5;
          return acc;
      }, {});

      const wordData = Object.entries(wordFrequency).map(([text, value]) => ({
          text,
          size: 10 + value * 10,
      }));

      d3.select(wordCloudRef.current).selectAll("*").remove();

      const svg = d3
          .select(wordCloudRef.current)
          .append("svg")
          .attr("width", 300)
          .attr("height", 200)
          .append("g")
          .attr("transform", "translate(150,100)");

      const layout = cloud()
          .size([300, 200])
          .words(wordData)
          .padding(5)
          .rotate(() => (Math.random() > 0.5 ? 0 : 90))
          .font("Impact")
          .fontSize((d) => d.size)
          .on("end", (words) => {
              svg
                  .selectAll("text")
                  .data(words)
                  .enter()
                  .append("text")
                  .style("font-size", (d) => `${d.size}px`)
                  .style("font-family", "Impact")
                  .style("fill", () =>
                      d3.schemeCategory10[Math.floor(Math.random() * 10)]
                  )
                  .attr("text-anchor", "middle")
                  .attr("transform", (d) => `translate(${d.x}, ${d.y}) rotate(${d.rotate})`)
                  .text((d) => d.text);
          });

      layout.start();
  };

  const downloadWordCloud = () => {
      const svgElement = wordCloudRef.current.querySelector("svg");
      if (!svgElement) {
          alert("No word cloud found! Please generate one before downloading.");
          return;
      }

      try {
          const fileName = product.title.trim() !== "" ? product.title : "untitled";
          const svgData = new XMLSerializer().serializeToString(svgElement);
          const blob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
          const url = URL.createObjectURL(blob);

          const link = document.createElement("a");
          link.href = url;
          link.download = `${fileName}-word-cloud.svg`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(url);
      } catch (error) {
          console.error("Error serializing SVG:", error);
          alert("Failed to download word cloud. Please try again.");
      }
  };

  const handleSave = () => {
    if (!product.title || product.title.trim() === "") {
        alert("Please provide a title for your journal entry.");
        return;
    }

    const savedKey = `saved${product.title.trim()}`;
    window.localStorage.setItem(savedKey, JSON.stringify(product));
    alert("Journal entry saved!");
  };

  return (
      <>
          <div className="journal">
              <div className="journalTitle">
                  <input
                      type="text"
                      placeholder="Title"
                      value={product.title}
                      onChange={(e) => setProduct({ ...product, title: e.target.value })}
                      style={{ color: fontColor }}
                  />
              </div>
              <div className="date">
                  <input
                      type="date"
                      value={product.date}
                      onChange={(e) => setProduct({ ...product, date: e.target.value })}
                      style={{ color: fontColor }}
                  />
              </div>
              <div className="category-dropdown">
                  <div
                      className={dropDown ? "select-clicked" : "select"}
                      onClick={drop}
                      style={{ color: fontColor }}
                  >
                      <span className="selected">
                          Category: {selected || "Select"}
                      </span>
                      <div className={dropDown ? "caret-rotate" : "caret"}></div>
                  </div>
                  <ol className={dropDown ? "menu-open" : "menu"}>
                      {categories.map((category, index) => (
                          <li
                              key={index}
                              className={selected === category ? "active2" : ""}
                              onClick={() => categoryClicked(category, index)}
                          >
                              {category}
                          </li>
                      ))}
                  </ol>
              </div>
              <div className="content">
                  <textarea
                      placeholder="Your Dream..."
                      style={{ color: fontColor }}
                      value={text}
                      onChange={(e) => {
                          setText(e.target.value);
                          setProduct({ ...product, content: e.target.value });
                      }}
                  />
              </div>
              <div className="journal-buttons">
                  <button className="clear" type="button" onClick={handleClear}>
                      Clear
                  </button>
                  <button className="save" type="button" onClick={handleSave}>
                      Save
                  </button>
              </div>
          </div>
          <div className="sideNav">
              <h2 style={{ color: fontColor }}>Your Journal</h2>
              <p style={{ color: fontColor }}>
                  Font color:{" "}
                  <input
                      type="color"
                      value={fontColor}
                      onChange={(e) => {
                          setFontColor(e.target.value);
                          setProduct({ ...product, fontColor: e.target.value });
                      }}
                  />
              </p>
              <div className="product">
                  <img src={productCloud} alt="cloud image" />
                  <p className="title-display" style={{ color: fontColor }}>
                      Title: {product.title}
                  </p>
                  <p className="date-display" style={{ color: fontColor }}>
                      Date: {product.date}
                  </p>
                  <p className="category-display" style={{ color: fontColor }}>
                      Category: {product.category || "Not Selected"}
                  </p>
              </div>
              <div className="current-word-cloud">
                  <h3>Word Cloud</h3>
                  <div ref={wordCloudRef} className="word-cloud"></div>
              </div>
              <div className="button-div">
                  <button className="generate-wc" onClick={generateWordCloud}>
                      Generate
                  </button>
                  <button className="download-wc" onClick={downloadWordCloud}>
                      Download
                  </button>
              </div>
          </div>
      </>
  );
}

export default Journal;
