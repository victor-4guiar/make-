function main(){
	
	for(c=0;c<=10;c++){
		make("div", "box", "testeeeee");
	}
	
	function make(type, id, text, mom = document.body){
		let ele = document.createElement(`${type}`);
		ele.setAttribute('id', `${id}`);
		ele.innerHTML = `${text}`;
		mom.appendChild(ele);
	}
}