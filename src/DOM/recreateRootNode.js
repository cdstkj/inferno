export default function recreateRootNode(lastItem, nextItem, node) {
	const lastDomNode = lastItem.rootNode;
	const domNode = node.create(nextItem);
	lastDomNode.parentNode.replaceChild(domNode, lastDomNode);
	// TODO recycle old node
}