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
pub fn quant_png(data: &[u8], quality: u8, speed: i32) -> Result<Vec<u8>, JsError> {
    tiny::quant_png(data,quality,speed)
}