function handlePlaceHolder(type){
  switch (type) {
    case "Name":
      return "Full name goes here";

    case "Email":
      return "example@email.com";



    case "Phone number":
      return "123-456-7890";

    case "Portfolio":
      return "www.MyPortfolioExample.com/";

    case "date":
      return "YYYY-MM-DD";

    case "url":
      return "https://example.com";

    case "Git":
      return "www.github.com/ExampleUser";

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