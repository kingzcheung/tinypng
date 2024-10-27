mod utils;
mod tiny;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet() {
    alert("Hello, tinypng!");
}

#[wasm_bindgen]
pub fn quant_png(data:&[u8]) -> Vec<u8> {
    tiny::quant_png(data)
}