import * as TS301 from "typescript-3-0-1";
import * as TS311 from "typescript-3-1-1";
import * as TS321 from "typescript-3-2-1";
import * as TS331 from "typescript-3-3-1";
import * as TS341 from "typescript-3-4-1";
import * as TS351 from "typescript-3-5-1";
import * as TS362 from "typescript-3-6-2";
import * as TS372 from "typescript-3-7-2";
import * as TS383 from "typescript-3-8-3";
import * as TS392 from "typescript-3-9-2";
import * as TS403 from "typescript-4-0-3";
import * as TS410Beta from "typescript-4-1-0-beta";
import * as TS412 from "typescript-4-1-2";
import * as TSCurrent from "typescript";
import avaTest, {ExecutionContext, ImplementationResult} from "ava";
import {TS} from "../../src/clone-node/type/ts";
import {CompatFactory} from "../../src/clone-node/type/compat-factory";

export interface ExtendedImplementationArgumentOptions {
	typescript: typeof TS;
	compatFactory: CompatFactory;
	typescriptModuleSpecifier: string;
}

function getTsVersionFromEnv(): [typeof TS, string][] | undefined {
	if (process.env.TS_VERSION == null) return undefined;
	switch (process.env.TS_VERSION.toUpperCase()) {
		case "3.0.1":
		case "3.0":
		case "3":
			return [[(TS301 as unknown) as typeof TS, "typescript-3-0-1"]];
		case "3.1.1":
		case "3.1":
			return [[(TS311 as unknown) as typeof TS, "typescript-3-1-1"]];
		case "3.2.1":
		case "3.2":
			return [[(TS321 as unknown) as typeof TS, "typescript-3-2-1"]];
		case "3.3.1":
		case "3.3":
			return [[(TS321 as unknown) as typeof TS, "typescript-3-3-1"]];
		case "3.4.1":
		case "3.4":
			return [[(TS341 as unknown) as typeof TS, "typescript-3-4-1"]];
		case "3.5.1":
		case "3.5":
			return [[(TS351 as unknown) as typeof TS, "typescript-3-5-1"]];
		case "3.6.2":
		case "3.6":
			return [[(TS362 as unknown) as typeof TS, "typescript-3-6-2"]];
		case "3.7.2":
		case "3.7":
			return [[(TS372 as unknown) as typeof TS, "typescript-3-7-2"]];
		case "3.8.3":
		case "3.8":
			return [[(TS383 as unknown) as typeof TS, "typescript-3-8-3"]];
		case "3.9.2":
		case "3.9":
			return [[(TS392 as unknown) as typeof TS, "typescript-3-9-2"]];
		case "4.0.0":
		case "4.0.3":
		case "4.0":
		case "4":
			return [[(TS403 as unknown) as typeof TS, "typescript-4-0-3"]];
		case "4.1.0":
		case "4.1.0-beta":
			return [[(TS410Beta as unknown) as typeof TS, "typescript-4-1-0-beta"]];
		case "4.1":
		case "4.1.2":
			return [[(TS412 as unknown) as typeof TS, "typescript-4-1-2"]];
		case "4.2":
		case "4.2.3":
		case "CURRENT":
			return [[(TSCurrent as unknown) as typeof TS, "typescript"]];
	}

	return undefined;
}

export type ExtendedImplementation<Context = unknown> = (t: ExecutionContext<Context>, options: ExtendedImplementationArgumentOptions) => ImplementationResult;

function sharedTest<Context = unknown>(title: string, implementation: ExtendedImplementation<Context>, subMethod?: "skip" | "only"): void {
	if (process.env.TS_VERSION != null) {
	}
	for (const [typescript, typescriptModuleSpecifier] of getTsVersionFromEnv() ??
		([
			[TS301, "typescript-3-0-1"],
			[TS311, "typescript-3-1-1"],
			[TS321, "typescript-3-2-1"],
			[TS331, "typescript-3-3-1"],
			[TS341, "typescript-3-4-1"],
			[TS351, "typescript-3-5-1"],
			[TS362, "typescript-3-6-2"],
			[TS372, "typescript-3-7-2"],
			[TS383, "typescript-3-8-3"],
			[TS392, "typescript-3-9-2"],
			[TS403, "typescript-4-0-3"],
			[TSCurrent, "typescript"]
		] as [typeof TS, string][])) {
		const func = subMethod != null ? avaTest[subMethod] : avaTest.serial;
		func(`${title} (TypeScript v${typescript.version})`, ctx =>
			implementation(ctx as ExecutionContext<Context>, {typescript, compatFactory: typescript.factory ?? typescript, typescriptModuleSpecifier})
		);
	}
}

export default function test<Context = unknown>(title: string, implementation: ExtendedImplementation<Context>): void {
	return sharedTest(title, implementation);
}

test.only = <Context = unknown>(title: string, implementation: ExtendedImplementation<Context>): void => {
	return sharedTest(title, implementation, "only");
};

test.skip = <Context = unknown>(title: string, implementation: ExtendedImplementation<Context>): void => {
	return sharedTest(title, implementation, "skip");
};
