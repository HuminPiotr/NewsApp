import React from "react";

const Article = ({ title, date, description, image, link }) => {
  const getFormatDate = (date) => {
    const result = String(date).split("");
    result.splice(-4);
    result.splice(10, 1, " ");
    return result;
  };

  const getTrimDescription = (description, maxLength) => {
    maxLength = maxLength - 3; // maximum number of characters to extract
    let textIsComplite = false; //does the text have maxLength - 3
    let trimmedString;

    if (String(description).length < 60 - 3) {
      textIsComplite = true;
    }

    //trim the string to the maximum length
    trimmedString = String(description).substr(0, maxLength);

    //re-trim if we are in the middle of a word
    trimmedString = trimmedString.substr(
      0,
      Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))
    );
    return textIsComplite ? trimmedString : `${trimmedString}...`;
  };
  return (
    <a className="article" href={link} target="_blank">
      {/* <div className="article"> */}
      <img className="article__image" src={image}></img>
      <h3 className="article__title">{title}</h3>
      <span className="article__date">{getFormatDate(date)}</span>
      <p>{getTrimDescription(description, 60)}</p>
      {/* </div> */}
    </a>
  );
};

export default Article;
