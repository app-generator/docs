const visit = require("unist-util-visit");
const SKIP = require("unist-util-visit");
var h = require("hastscript");
var s = require("hastscript");
var findAndReplace = require("hast-util-find-and-replace");
// const u = require("unist-builder");
const plugin = (options) => {
	const transformer = async (ast, vfile) => {
		if (vfile.contents.includes("{% embed")) {
			await visit(ast, "paragraph", (node, index, parent) => {
				// console.log("transformer vfile", vfile);

				let value = node.children[0].value;
				let link = node.children[1];
				if (value && value.includes("{% embed")) {
					// console.log("node", node);
					// console.log("value", value);
					// console.log("link", link.url);
					// let iframe = h("iframe", [h("link", link.url), h("width", "100%"), h("height", "315"), h("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"), h("frameborder", "0"), "allowfullscreen"]);
					let iframe = h("iframe", { src: link.url, width: "100%", height: "315", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", frameborder: "0", allowfullscreen: true });
					let link2 = h("link", { href: link.url });
					let svg = s("svg", { xmlns: "http://www.w3.org/2000/svg", viewbox: "0 0 500 500" }, [s("title", "SVG `<circle>` element"), s("circle", { cx: 120, cy: 120, r: 100 })]);
					let svg2 = "<svg xmlns='http://www.w3.org/2000/svg' viewbox='0 0 500 500'>         <title>SVG `&lt;circle&gt;` element</title>     <circle cx={120} cy={120} r={100} /></svg>";
					// node = iframe;
					console.log("index", index);
					console.log("link2", link2);

					// parent.children.splice(
					// 	index,
					// 	1,
					// 	// iframe
					// 	`<iframe width="100%" height="315" src="${link.url}" title="How to deploy Flask on Render Platform" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `
					// );
					parent.children.splice(index, 0, link2);
					// parent.children.splice(index + 1, 0, svg);
					// parent.children.splice(index + 2, 0, svg2);

					// return [SKIP, index];

					// node.children.unshift(iframe);

					// node.replaceChild(newChild, node.children[0])
					// let result = `<iframe width="100%" height="315" src=${link.url} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

					// node.appendChild("DONE !!!!");
					// findAndReplace(node, "link",iframe);
				}

				// while (node) {
				// 	// result += `Value of ${node.nodeName}: ${node.nodeValue}<br/>`;
				// 	console.log(`Value of ${node.nodeName}: ${node.nodeValue}`);
				// 	node = node.nextSibling;
				// }

				// if (node.nodeValue.includes("{% embed")) {
				// 	console.log("node 1", node);
				// }

				// if (node.depth === 2 && node.children.length > 0) {
				//   node.children.unshift({
				//     type: 'text',
				//     value: `Section ${number}. `,
				//   });
				//   number++;
				// }
			});
		}
	};
	return transformer;
};

module.exports = plugin;
