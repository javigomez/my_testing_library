import {average, sum} from '../stats';
import * as statsAsync from '../statsAsync';
// import {expect, test} from "./testLib";

test('calculates the sum of all elements of the array', () =>{
    let result = sum([1,2,3])
    let expected = 6
    expect(result).toBe(expected)
})

test('calculates the average of all elements of the array', async () =>{
    const result = await statsAsync.average([1,2,3])
    const expected = 2
    expect(result).toBe(expected)
})

test('calculates the sum of all elements of the array (async)', async() =>{
    let result = await statsAsync.sum([1,2,3])
    let expected = 6
    expect(result).toBe(expected)
})

test('calculates the average of all elements of the array (async)', () =>{
    const result = average([1,2,3])
    const expected = 2
    expect(result).toBe(expected)
})
