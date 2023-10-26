/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
export const singleton = <Value>(name: string, valueFactory: () => Value): Value => {
	const g = global as any;
	g.__singletons ??= {};
	g.__singletons[name] ??= valueFactory();
	return g.__singletons[name];
};
