/* tslint:disable */
/* eslint-disable */
export const memory: WebAssembly.Memory;
export function quant_png(a: number, b: number): Array;
export function greet(): void;
export function lodepng_malloc(a: number): number;
export function lodepng_realloc(a: number, b: number): number;
export function lodepng_free(a: number): void;
export function lodepng_state_init(a: number): void;
export function lodepng_state_cleanup(a: number): void;
export function lodepng_state_copy(a: number, b: number): number;
export function lodepng_error_text(a: number): number;
export function lodepng_encode32(a: number, b: number, c: number, d: number, e: number): number;
export function lodepng_encode24(a: number, b: number, c: number, d: number, e: number): number;
export function lodepng_encode_file(a: number, b: number, c: number, d: number, e: number, f: number): number;
export function lodepng_encode32_file(a: number, b: number, c: number, d: number): number;
export function lodepng_encode24_file(a: number, b: number, c: number, d: number): number;
export function lodepng_get_bpp_lct(a: number, b: number): number;
export function lodepng_get_bpp(a: number): number;
export function lodepng_get_channels(a: number): number;
export function lodepng_is_greyscale_type(a: number): number;
export function lodepng_is_alpha_type(a: number): number;
export function lodepng_is_palette_type(a: number): number;
export function lodepng_has_palette_alpha(a: number): number;
export function lodepng_can_have_alpha(a: number): number;
export function lodepng_get_raw_size(a: number, b: number, c: number): number;
export function lodepng_get_raw_size_lct(a: number, b: number, c: number, d: number): number;
export function lodepng_palette_clear(a: number): void;
export function lodepng_palette_add(a: number, b: number, c: number, d: number, e: number): number;
export function lodepng_clear_text(a: number): void;
export function lodepng_add_text(a: number, b: number, c: number): number;
export function lodepng_clear_itext(a: number): void;
export function lodepng_add_itext(a: number, b: number, c: number, d: number, e: number): number;
export function lodepng_chunk_create(a: number, b: number, c: number, d: number, e: number): number;
export function lodepng_chunk_length(a: number): number;
export function lodepng_chunk_type(a: number, b: number): void;
export function lodepng_chunk_type_equals(a: number, b: number): number;
export function lodepng_chunk_data_const(a: number): number;
export function lodepng_chunk_next(a: number): number;
export function lodepng_chunk_ancillary(a: number): number;
export function lodepng_chunk_private(a: number): number;
export function lodepng_chunk_safetocopy(a: number): number;
export function lodepng_chunk_data(a: number): number;
export function lodepng_chunk_check_crc(a: number): number;
export function lodepng_chunk_generate_crc(a: number): void;
export function lodepng_chunk_append(a: number, b: number, c: number): number;
export function lodepng_color_mode_init(a: number): void;
export function lodepng_color_mode_cleanup(a: number): void;
export function lodepng_color_mode_equal(a: number, b: number): number;
export function lodepng_color_mode_copy(a: number, b: number): number;
export function lodepng_zlib_decompress(a: number, b: number, c: number, d: number, e: number): number;
export function zlib_decompress(a: number, b: number, c: number, d: number, e: number): number;
export function lodepng_zlib_compress(a: number, b: number, c: number, d: number, e: number): number;
export function zlib_compress(a: number, b: number, c: number, d: number, e: number): number;
export function lodepng_compress_settings_init(a: number): void;
export function lodepng_decompress_settings_init(a: number): void;
export function lodepng_crc32(a: number, b: number): number;
export function lodepng_info_init(a: number): void;
export function lodepng_info_cleanup(a: number): void;
export function lodepng_info_copy(a: number, b: number): number;
export function lodepng_info_swap(a: number, b: number): void;
export function lodepng_convert(a: number, b: number, c: number, d: number, e: number, f: number): number;
export function lodepng_inspect(a: number, b: number, c: number, d: number, e: number): number;
export function lodepng_decode(a: number, b: number, c: number, d: number, e: number, f: number): number;
export function lodepng_decode_memory(a: number, b: number, c: number, d: number, e: number, f: number, g: number): number;
export function lodepng_decode32(a: number, b: number, c: number, d: number, e: number): number;
export function lodepng_decode24(a: number, b: number, c: number, d: number, e: number): number;
export function lodepng_decode_file(a: number, b: number, c: number, d: number, e: number, f: number): number;
export function lodepng_decode32_file(a: number, b: number, c: number, d: number): number;
export function lodepng_decode24_file(a: number, b: number, c: number, d: number): number;
export function lodepng_decoder_settings_init(a: number): void;
export function lodepng_buffer_file(a: number, b: number, c: number): number;
export function lodepng_load_file(a: number, b: number, c: number): number;
export function lodepng_save_file(a: number, b: number, c: number): number;
export function lodepng_encode(a: number, b: number, c: number, d: number, e: number, f: number): number;
export function lodepng_get_color_profile(a: number, b: number, c: number, d: number, e: number): number;
export function lodepng_auto_choose_color(a: number, b: number, c: number, d: number, e: number): number;
export function lodepng_filesize(a: number): number;
export function lodepng_encode_memory(a: number, b: number, c: number, d: number, e: number, f: number, g: number): number;
export function lodepng_encoder_settings_init(a: number): void;
export function lodepng_color_profile_init(a: number): void;
export function lodepng_chunk_next_const(a: number): number;
export const __wbindgen_export_0: WebAssembly.Table;
export function __wbindgen_malloc(a: number, b: number): number;
export function __wbindgen_free(a: number, b: number, c: number): void;
export function __wbindgen_start(): void;
