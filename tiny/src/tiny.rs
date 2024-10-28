// use std::{num::NonZero, time::Duration};

// use oxipng::{Deflaters, IndexSet, Interlacing, Options, PngResult, RowFilter, StripChunks};

// pub fn optimize_png(data: &[u8]) ->PngResult<Vec<u8>>{
//     let opts = Options {
//         fix_errors: true,
//         force: true,
//         filter: IndexSet::from([
//             RowFilter::None,
//             RowFilter::Sub,
//             RowFilter::Up,
//             RowFilter::Average,
//             RowFilter::Paeth,
//             RowFilter::Entropy,
//             RowFilter::Bigrams,
//         ]),
//         interlace: Some(Interlacing::None),
//         optimize_alpha: true,
//         bit_depth_reduction: true,
//         color_type_reduction: true,
//         palette_reduction: true,
//         grayscale_reduction: true,
//         idat_recoding: true,
//         scale_16: true,
//         strip: StripChunks::All,  // 移除安全的元数据块
//         deflate: Deflaters::Zopfli { iterations: NonZero::new(15).unwrap() },
//         fast_evaluation: false,
//         timeout: Some(Duration::from_secs(60)),
//     };

//     oxipng::optimize_from_memory(data, &opts)
// }

use wasm_bindgen::JsError;

pub fn quant_png(data: &[u8], quality: u8, speed: i32) -> Result<Vec<u8>, JsError> {
    let bitmap = lodepng::decode32(data).map_err(JsError::from)?;
    let width = bitmap.width;
    let height = bitmap.height;

    let mut liq = imagequant::new();
    liq.set_speed(speed).map_err(JsError::from)?;
    liq.set_quality(quality, 99).map_err(JsError::from)?;

    let mut img = liq
        .new_image(bitmap.buffer, width, height, 0.0)
        .map_err(JsError::from)?;

    let mut res = liq.quantize(&mut img).map_err(JsError::from)?;

    // Enable dithering for subsequent remappings
    res.set_dithering_level(1.0).map_err(JsError::from)?;

    let (palette, pixels) = res.remapped(&mut img).map_err(JsError::from)?;

    let mut enc = lodepng::Encoder::new();
    enc.set_palette(&palette).map_err(JsError::from)?;

    let r = enc.encode(&pixels, width, height).map_err(JsError::from)?;
    Ok(r)
}
