import {TS} from "./type/ts";
import {CloneNodeVisitorOptions} from "./clone-node-options";

export function cloneSpreadElement(node: TS.SpreadElement, options: CloneNodeVisitorOptions<TS.SpreadElement>): TS.SpreadElement {
	return options.factory.createSpreadElement(options.hook("expression", options.nextNode(node.expression), node.expression));
}
