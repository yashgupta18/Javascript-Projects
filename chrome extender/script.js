// alert('hi')
replaceText(document.body)


function replaceText(element){
	if(element.hasChildNodes()){
		//keep looking child nodes
		element.childNodes.forEach(replaceText) 

		//if no more child element
	} else if (element.nodeType === Text.TEXT_NODE){ 
		if(element.textContent.match(/coronavirus/gi)){
			const newElement = document.createElement('span')
			newElement.innerHTML = element.textContent.replace(/(coronavirus)/gi,'<span class="rainbow">$1</span>')
			element.replaceWith(newElement)

			// element.parentElement.remove()

		}
		// element.textContent = element.textContent.replace(/coronavirus/gi, 'YASH')
	}
}
