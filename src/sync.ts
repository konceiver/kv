export interface IKeyValueStoreSync<K, T> {
	/**
	 * Get all of the items in the store.
	 */
	all(): Array<[K, T]>;

	/**
	 * Get the keys of the store items.
	 */
	keys(): K[];

	/**
	 * Get the values of the store items.
	 */
	values(): T[];

	/**
	 * Retrieve an item from the store by key.
	 */
	get(key: K): T | undefined;

	/**
	 * Retrieve multiple items from the store by key.
	 */
	getMany(keys: K[]): Array<T | undefined>;

	/**
	 * Retrieve an item from the store and remove it.
	 */
	pull(key: K): T | undefined;

	/**
	 * Retrieve multiple items from the store and remove them.
	 */
	pullMany(keys: K[]): Array<T | undefined>;

	/**
	 * Store an item in the store.
	 */
	put(key: K, value: T): boolean;

	/**
	 * Store multiple items in the store.
	 */
	putMany(values: Array<[K, T]>): boolean[];

	/**
	 * Determine if an item exists in the store.
	 */
	has(key: K): boolean;

	/**
	 * Determine if multiple items exist in the store.
	 */
	hasMany(keys: K[]): boolean[];

	/**
	 * Determine if an item doesn't exist in the store.
	 */
	missing(key: K): boolean;

	/**
	 * Determine if multiple items don't exist in the store.
	 */
	missingMany(keys: K[]): boolean[];

	/**
	 * Remove an item from the store.
	 */
	forget(key: K): boolean;

	/**
	 * Remove multiple items from the store.
	 */
	forgetMany(keys: K[]): boolean[];

	/**
	 * Remove all items from the store.
	 */
	flush(): boolean;

	/**
	 * Count the number of items in the store.
	 */
	count(): number;

	/**
	 * Determine if the store is empty.
	 */
	isEmpty(): boolean;

	/**
	 * Determine if the store is not empty.
	 */
	isNotEmpty(): boolean;
}
