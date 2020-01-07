import {CloneNodeInternalOptions} from "./clone-node-options";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";
import {cloneNode} from "./clone-node";

export function cloneJsDocEnumTag(node: TS.JSDocEnumTag, options: CloneNodeInternalOptions<TS.JSDocEnumTag>): TS.JSDocEnumTag {
	const baseNode = options.typescript.createNode(options.typescript.SyntaxKind.JSDocEnumTag, -1, -1) as TS.JSDocEnumTag;
	baseNode.flags = options.hook("flags", (node.flags |= 8), (node.flags |= 8), payload(options));
	baseNode.comment = options.hook("comment", node.comment, node.comment, payload(options));
	baseNode.tagName = options.hook("tagName", cloneNode(node.tagName, nextOptions(node.tagName, options)), node.tagName, payload(options));
	baseNode.typeExpression = options.hook(
		"typeExpression",
		cloneNode(node.typeExpression, nextOptions(node.typeExpression, options)),
		node.typeExpression,
		payload(options)
	);

	return baseNode;
}
