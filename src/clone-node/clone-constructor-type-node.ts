import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneConstructorTypeNode(
	node: TS.ConstructorTypeNode,
	options: CloneNodeInternalOptions<TS.ConstructorTypeNode>
): TS.ConstructorTypeNode {
	return options.typescript.createConstructorTypeNode(
		options.hook("typeParameters", cloneNodes(node.typeParameters, nextOptions(node.typeParameters, options)), node.typeParameters, payload(options)),
		options.hook("parameters", cloneNodes(node.parameters, nextOptions(node.parameters, options)), node.parameters, payload(options)),
		options.hook("type", cloneNode(node.type, nextOptions(node.type, options)), node.type, payload(options))
	);
}
