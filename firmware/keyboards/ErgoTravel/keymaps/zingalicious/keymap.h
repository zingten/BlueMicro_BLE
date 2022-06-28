/*
Copyright 2018 <Pierre Constantineau>

3-Clause BSD License

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR 
A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT 
LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT 
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

*/
#include <stdint.h>
#include "hid_keycodes.h"
#include "keyboard_config.h"
#include "advanced_keycodes.h"
#define MAX_NO_LAYERS 10 //6
#include "Key.h"
#include <array>

#ifndef KEYMAP_H
#define KEYMAP_H

#define _COLEMAK 0
#define _LOWER  1
#define _RAISE  2
#define _FUNC  3
#define _ADJUST  4
#define _ARROWS  5

#define KM_COLE MC(KC_A);
#define KM_QWRT MC(KC_B);
#define KM_RKLG MC(KC_C);
#define KM_FPS MC(KC_D);

#define ALT_F4 LALT(KC_F4);
#define WKSPC_L LCTL(LGUI(KC_LEFT));
#define WKSPC_R LCTL(LGUI(KC_RIGHT));
#define TSK_MGR LCTL(LSFT(KC_ESC));

#define C_BSPC LCTL(KC_BSPC);
#define C_REDO LCTL(LSFT((KC_Z));
#define C_UNDO LCTL(KC_Z);
#define C_CUT LCTL(KC_X);
#define C_COPY LCTL(KC_C);
#define C_PASTE LCTL(KC_V);
#define C_SELCT LCTL(KC_A);
#define C_LEFT LCTL(KC_LEFT);
#define C_RIGHT LCTL(KC_RGHT);

#define SDP_AUT LALT(KC_F10);
#define SDP_MAN LALT(KC_F9);
#define SDP_TOG LSFT(LALT(KC_F10));
#define SDP_OPT LALT(KC_PSCR);

#define SCRNSHT LSFT(LGUI(KC_S));

#define OSMLSFT OS(KC_LSFT);

void setupKeymap();
void setupColemakKeymap();
void setupQwertyKeymap();
void setupRKLGKeymap();
void setupFPSKeymap();

void process_user_macros(uint16_t macroid);

extern std::array<std::array<Key, MATRIX_COLS>, MATRIX_ROWS> matrix;

#endif /* KEYMAP_H */