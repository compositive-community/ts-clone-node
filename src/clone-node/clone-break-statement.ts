import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneBreakStatement(node: TS.BreakStatement, options: CloneNodeVisitorOptions<TS.BreakStatement>): TS.BreakStatement {
	return options.factory.createBreakStatement(options.hook("label", options.nextNode(node.label), node.label));
}
