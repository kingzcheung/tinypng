/* tslint:disable */
/* eslint-disable */
export function greet(): void;
/**
 * @param {Uint8Array} data
 * @param {number} quality
 * @param {number} speed
 * @returns {Uint8Array}
 */
export function quant_png(data: Uint8Array, quality: number, speed: number): Uint8Array;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly quant_png: (a: number, b: number, c: number, d: number) => Array;
  readonly greet: () => void;
  readonly lodepng_malloc: (a: number) => number;
  readonly lodepng_realloc: (a: number, b: number) => number;
  readonly lodepng_free: (a: number) => void;
  readonly lodepng_state_init: (a: number) => void;
  readonly lodepng_state_cleanup: (a: number) => void;
  readonly lodepng_state_copy: (a: number, b: number) => number;
  readonly lodepng_error_text: (a: number) => number;
  readonly lodepng_encode32: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly lodepng_encode24: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly lodepng_encode_file: (a: number, b: number, c: number, d: number, e: number, f: number) => number;
  readonly lodepng_encode32_file: (a: number, b: number, c: number, d: number) => number;
  readonly lodepng_encode24_file: (a: number, b: number, c: number, d: number) => number;
  readonly lodepng_get_bpp_lct: (a: number, b: number) => number;
  readonly lodepng_get_bpp: (a: number) => number;
  readonly lodepng_get_channels: (a: number) => number;
  readonly lodepng_is_greyscale_type: (a: number) => number;
  readonly lodepng_is_alpha_type: (a: number) => number;
  readonly lodepng_is_palette_type: (a: number) => number;
  readonly lodepng_has_palette_alpha: (a: number) => number;
  readonly lodepng_can_have_alpha: (a: number) => number;
  readonly lodepng_get_raw_size: (a: number, b: number, c: number) => number;
  readonly lodepng_get_raw_size_lct: (a: number, b: number, c: number, d: number) => number;
  readonly lodepng_palette_clear: (a: number) => void;
  readonly lodepng_palette_add: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly lodepng_clear_text: (a: number) => void;
  readonly lodepng_add_text: (a: number, b: number, c: number) => number;
  readonly lodepng_clear_itext: (a: number) => void;
  readonly lodepng_add_itext: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly lodepng_chunk_create: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly lodepng_chunk_length: (a: number) => number;
  readonly lodepng_chunk_type: (a: number, b: number) => void;
  readonly lodepng_chunk_type_equals: (a: number, b: number) => number;
  readonly lodepng_chunk_data_const: (a: number) => number;
  readonly lodepng_chunk_next: (a: number) => number;
  readonly lodepng_chunk_ancillary: (a: number) => number;
  readonly lodepng_chunk_private: (a: number) => number;
  readonly lodepng_chunk_safetocopy: (a: number) => number;
  readonly lodepng_chunk_data: (a: number) => number;
  readonly lodepng_chunk_check_crc: (a: number) => number;
  readonly lodepng_chunk_generate_crc: (a: number) => void;
  readonly lodepng_chunk_append: (a: number, b: number, c: number) => number;
  readonly lodepng_color_mode_init: (a: number) => void;
  readonly lodepng_color_mode_cleanup: (a: number) => void;
  readonly lodepng_color_mode_equal: (a: number, b: number) => number;
  readonly lodepng_color_mode_copy: (a: number, b: number) => number;
  readonly lodepng_zlib_decompress: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly zlib_decompress: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly lodepng_zlib_compress: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly zlib_compress: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly lodepng_compress_settings_init: (a: number) => void;
  readonly lodepng_decompress_settings_init: (a: number) => void;
  readonly lodepng_crc32: (a: number, b: number) => number;
  readonly lodepng_info_init: (a: number) => void;
  readonly lodepng_info_cleanup: (a: number) => void;
  readonly lodepng_info_copy: (a: number, b: number) => number;
  readonly lodepng_info_swap: (a: number, b: number) => void;
  readonly lodepng_convert: (a: number, b: number, c: number, d: number, e: number, f: number) => number;
  readonly lodepng_inspect: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly lodepng_decode: (a: number, b: number, c: number, d: number, e: number, f: number) => number;
  readonly lodepng_decode_memory: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => number;
  readonly lodepng_decode32: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly lodepng_decode24: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly lodepng_decode_file: (a: number, b: number, c: number, d: number, e: number, f: number) => number;
  readonly lodepng_decode32_file: (a: number, b: number, c: number, d: number) => number;
  readonly lodepng_decode24_file: (a: number, b: number, c: number, d: number) => number;
  readonly lodepng_decoder_settings_init: (a: number) => void;
  readonly lodepng_buffer_file: (a: number, b: number, c: number) => number;
  readonly lodepng_load_file: (a: number, b: number, c: number) => number;
  readonly lodepng_save_file: (a: number, b: number, c: number) => number;
  readonly lodepng_encode: (a: number, b: number, c: number, d: number, e: number, f: number) => number;
  readonly lodepng_get_color_profile: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly lodepng_auto_choose_color: (a: number, b: number, c: number, d: number, e: number) => number;
  readonly lodepng_filesize: (a: number) => number;
  readonly lodepng_encode_memory: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => number;
  readonly lodepng_encoder_settings_init: (a: number) => void;
  readonly lodepng_color_profile_init: (a: number) => void;
  readonly lodepng_chunk_next_const: (a: number) => number;
  readonly __wbindgen_export_0: WebAssembly.Table;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __externref_table_dealloc: (a: number) => void;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
