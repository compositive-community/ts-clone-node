import {CloneNodeInternalOptions} from "./clone-node-options";
import {cloneNodes} from "./clone-nodes";
import {cloneNode} from "./clone-node";
import {TS} from "./type/ts";
import {nextOptions} from "./util/next-options";
import {payload} from "./util/payload";

export function cloneClassExpression(node: TS.ClassExpression, options: CloneNodeInternalOptions<TS.ClassExpression>): TS.ClassExpression {
	return options.typescript.createClassExpression(
		options.hook("modifiers", cloneNodes(node.modifiers, nextOptions(node.modifiers, options)), node.modifiers, payload(options)),
		options.hook("name", cloneNode(node.name, nextOptions(node.name, options)), node.name, payload(options)),
		options.hook("typeParameters", cloneNodes(node.typeParameters, nextOptions(node.typeParameters, options)), node.typeParameters, payload(options)),
		options.hook(
			"heritageClauses",
			cloneNodes(node.heritageClauses, nextOptions(node.heritageClauses, options)),
			node.heritageClauses,
			payload(options)
		),
		options.hook("members", cloneNodes(node.members, nextOptions(node.members, options)), node.members, payload(options))
	);
}
