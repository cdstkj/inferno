export default function recreateRootNode(lastDomNode, nextItem, node) {
	const domNode = node.create(nextItem);
	lastDomNode.parentNode.replaceChild(domNode, lastDomNode);
	// TODO recycle old node
}