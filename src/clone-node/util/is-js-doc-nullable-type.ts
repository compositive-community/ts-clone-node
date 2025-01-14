import {TS} from "../type/ts.js";
import {MetaNode} from "../type/meta-node.js";

/**
 * Returns true if the given Node is a JSDocNullableType
 */
export function isJsDocNullableType(node: MetaNode, typescript: typeof TS): node is TS.JSDocNullableType {
	// TypeScript 4.x
	if (("isJSDocNullableType" in typescript) as never) {
		return typescript.isJSDocNullableType(node);
	}
	return node.kind === typescript.SyntaxKind.JSDocNullableType;
}
