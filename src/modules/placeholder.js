function handlePlaceHolder(type){
  switch (type) {
    case "text":
      return "Enter text";

    case "email":
      return "example@email.com";

    case "password":
      return "Enter your password";

    case "tel":
      return "123-456-7890";

    case "number":
      return "Enter a number";

    case "date":
      return "YYYY-MM-DD";

    case "url":
      return "https://example.com";

    case "search":
      return "Search...";

    case "color":
      return "#ffffff";

    case "time":
      return "HH:MM";

    case "datetime-local":
      return "YYYY-MM-DDTHH:MM";

    case "month":
      return "YYYY-MM";

    case "week":
      return "YYYY-W##";

    default:
      return "Enter value";
  }
}
export{
    handlePlaceHolder,
}