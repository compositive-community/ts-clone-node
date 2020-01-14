import {TS} from "../type/ts";
import {MetaNode} from "../type/meta-node";

/**
 * Returns true if the given Node is a JSDocReadonlyTag
 */
export function isJSDocReadonlyTag(node: MetaNode, typescript: typeof TS): node is TS.JSDocReadonlyTag {
	return node.kind === typescript.SyntaxKind.JSDocReadonlyTag;
}
