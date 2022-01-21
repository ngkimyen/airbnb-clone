export const handleMouseOver = (element) => {
   element.style.backgroundColor = "transparent";
   element.classList.add('display-border')
}

export const handleMouseOut = (element) => {
   element.style.removeProperty('background-color');
   element.classList.remove('display-border')
}
