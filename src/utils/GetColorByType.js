const getColorByType = (type) => {
    switch(type)
    {
        case "bug":
            return "#1c4b27"
        case "dragon":
            return"#458a94";
        case "electric":
            return"#fbfb71";
        case "fighting":
            return"#ee6138 ";
        case "fire":
            return"#fe4c59";
        case "flying":
            return"#93b2c7 ";
        case "ghost":
            return"#906890"; 
        case "grass":
            return "#26cb4f";
        case "ground":
            return"#6e4a1f ";
        case "ice":
            return"#d8effa ";
        case "normal":
            return"#c998a7";
        case "poison":
            return"#9c69d8 ";
        case "psychic":
            return"#f91b91";
        case "rock":
            return"#8b3e21";
        case "water":
            return"#86a8fc";
        default: 
            return "#ccc"
    }
        

       
      
}
export default getColorByType