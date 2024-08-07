import { getCoffeeList } from '$lib/server/getCoffeeList';
import type { CoffeeDto } from '../dtos/coffee.dto';

export async function load() {
	const response = await getCoffeeList();
	const items: CoffeeDto[] = await response.json();

	return { items };
}
