/*
Copyright 2018 <Pierre Constantineau>

3-Clause BSD License

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

*/
#include "keymap.h"



#if KEYBOARD_SIDE == SINGLE
std::array<std::array<Key, MATRIX_COLS>, MATRIX_ROWS> matrix =
    KEYMAP2ARRAY(KEYMAP(
        KC_1,  KC_Q,    KC_W,    KC_E,    KC_R,    KC_T,  KC_Y, 
        KC_2,  KC_A,    KC_S,    KC_D,    KC_F,    KC_G,  KC_H,
        KC_3,  KC_Z,    KC_X,    KC_C,    KC_V,    KC_B,  KC_N,
        KC_4,  KC_5,    KC_6,    KC_7,    KC_8,    KC_9,  KC_0 
    ));

void setupKeymap() {

   // no layers for SINGLE keymap
   // this is a keymap that's used for testing that each key is responding properly to key presses
   // flash this keymap to both left and right to test whether each half works properly.
   // once tested, you can flash the left and right to their respective halves.

}

void setupColemakKeymap() {}
void setupQwertyKeymap() {}
void setupRKLGKeymap() {}
void setupFPSKeymap() {}

#endif


#if KEYBOARD_SIDE == LEFT

std::array<std::array<Key, MATRIX_COLS>, MATRIX_ROWS> matrix =
    KEYMAP2ARRAY(KEYMAP(
        KC_TAB,  KC_Q,    KC_W,    KC_F,    KC_P,    KC_G,  KC_LSFT, 
        KC_BSPC, KC_A,    KC_R,    KC_S,    KC_T,    KC_D,  KC_LCTL,
        KC_MINS, KC_Z,    KC_X,    KC_C,    KC_V,    KC_B,  LAYER_3,
        KC_ESC,  KC_LGUI, KC_RALT, KC_LALT, LAYER_1, KC_SPC,_______
    ));
 
void setupKeymap() {

    uint32_t layer1[MATRIX_ROWS][MATRIX_COLS] =
        KEYMAP( \
  KC_GRAVE,KC_F1,  KC_F2,  KC_F3,  KC_F4,  KC_F5,  KC_F6,  \
  C_BKSPC, KC_1,   KC_2,   KC_3,   KC_4,   KC_5,   KC_NO,  \
  C_REDO,  C_UNDO, C_COPY, C_CUT,  C_PASTE,KC_NO,  KC_NO,  \
  TSK_MGR, KC_LGUI,KC_LALT,KC_LCTL,KC_LCTL,KC_LSFT,_______ \
);

    uint32_t layer2[MATRIX_ROWS][MATRIX_COLS] =
        KEYMAP( \
  KC_WBAK, KC_HOME,KC_UP,  KC_END, KC_PGUP,KC_MRWD,KC_NLCK,\
  KC_WFWD, KC_LEFT,KC_DOWN,KC_RGHT,KC_PGDN,KC_F5,  KC_SLCK,\
  KC_WREF, C_LEFT, KC_NO,  C_RIGHT,KC_F17 ,KC_F18, KC_NO,  \
  KC_F13,  KC_F14, KC_F15, KC_F16, LAYER_1,KC_LSFT,_______ \
);

    uint32_t layer3[MATRIX_ROWS][MATRIX_COLS] =
        KEYMAP( \
  KC_NO,  KC_NO,  ALT_F4, KC_NO,  SCRNSHT,KC_NO,  KM_COLE,\
  KC_NO,  C_SELCT,KC_NO,  WKSPC_L,WKSPC_R,KC_NO,  KM_FPS, \
  KC_NO,  KC_NO,  KC_NO,  KC_NO,  KC_NO,  KC_NO,  LAYER_3,\
  KC_NO,  KC_NO,  KC_NO,  KC_NO,  KC_LALT,KC_LCTL,KC_LSFT \
);

    uint32_t layer4[MATRIX_ROWS][MATRIX_COLS] =
        KEYMAP( \
  KC_NO,  KC_NO,  KC_NO, KC_NO,  KC_NO,KC_NO,  KC_PWR,\
  KC_NO,  KC_NO,KC_NO,  KC_NO,KC_NO,KC_NO,  KC_SLEP, \
  KC_NO,  KC_NO,  KC_NO,  KC_NO,  KC_NO,  KC_NO,  KC_WAKE,\
  RESET,  KC_NO,  KC_NO,  KC_NO,  KC_NO,KC_NO,KC_NO \
);

    /*
     * add the other layers on the regular presses.
     */
    for (int row = 0; row < MATRIX_ROWS; ++row)
    {
        for (int col = 0; col < MATRIX_COLS; ++col)
        {
            matrix[row][col].addActivation(_LOWER, Method::PRESS, layer1[row][col]);
            matrix[row][col].addActivation(_RAISE, Method::PRESS, layer2[row][col]);
            matrix[row][col].addActivation(_FUNC, Method::PRESS, layer3[row][col]);
            matrix[row][col].addActivation(_ADJUST, Method::PRESS, layer4[row][col]);
        }
    }

    // if you want to add Tap/Hold or Tap/Doubletap activations, then you add them below.

}

void setupColemakKeymap() {
    uint32_t thislayer[MATRIX_ROWS][MATRIX_COLS] = KEYMAP(
        KC_TAB,  KC_Q,    KC_W,    KC_F,    KC_P,    KC_G,  KC_LSFT, 
        KC_BSPC, KC_A,    KC_R,    KC_S,    KC_T,    KC_D,  KC_LCTL,
        KC_MINS, KC_Z,    KC_X,    KC_C,    KC_V,    KC_B,  LAYER_3,
        KC_ESC,  KC_LGUI, KC_RALT, KC_LALT, LAYER_1, KC_SPC,_______
    );

    changeDefaultLayer(thisLayer);
}

void setupQwertyKeymap() {
    uint32_t thislayer[MATRIX_ROWS][MATRIX_COLS] = KEYMAP(
        KC_TAB,  KC_Q,    KC_W,    KC_E,    KC_R,    KC_T,  KC_LSFT, 
        KC_BSPC, KC_A,    KC_S,    KC_D,    KC_F,    KC_G,  KC_LCTL,
        KC_MINS, KC_Z,    KC_X,    KC_C,    KC_V,    KC_B,  LAYER_3,
        KC_ESC,  KC_LGUI, KC_RALT, KC_LALT, LAYER_1, KC_SPC,_______
    );

    changeDefaultLayer(thisLayer);
}

void setupRKLGKeymap() {
    uint32_t thislayer[MATRIX_ROWS][MATRIX_COLS] = KEYMAP(
        KC_TAB,  KC_Q,    KC_W,    KC_F,    KC_P,    KC_G,  KC_LSFT, 
        KC_BSPC, KC_A,    KC_R,    KC_S,    KC_T,    KC_D,  KC_LCTL,
        KC_MINS, KC_Z,    KC_X,    KC_C,    KC_V,    KC_B,  LAYER_3,
        KC_ESC,  KC_LGUI, KC_RALT, KC_LALT, LAYER_1, KC_SPC,_______
    );

    changeDefaultLayer(thisLayer);
}

void setupFPSKeymap() {
    uint32_t thislayer[MATRIX_ROWS][MATRIX_COLS] = KEYMAP(
        KC_TAB,  KC_Q,    KC_W,    KC_F,    KC_P,    KC_G,  KC_J, 
        KC_BSPC, KC_A,    KC_R,    KC_S,    KC_T,    KC_D,  KC_H,
        KC_MINS, KC_Z,    KC_X,    KC_C,    KC_V,    KC_B,  KC_LCTL,
        KC_ESC,  KC_LGUI, KC_RALT, LAYER_1, KC_LSFT, KC_SPC,_______
    );

    changeDefaultLayer(thisLayer);
}

#endif  // left



#if KEYBOARD_SIDE == RIGHT

std::array<std::array<Key, MATRIX_COLS>, MATRIX_ROWS> matrix =
    KEYMAP2ARRAY(KEYMAP(
        KC_UP,  KC_J,   KC_L,   KC_U,   KC_Y,   KC_SCLN,KC_DEL, 
        KC_DOWN,KC_H,   KC_N,   KC_E,   KC_I,   KC_O,   KC_QUOT,
        KC_LCTL,KC_K,   KC_M,   KC_COMM,KC_DOT, KC_SLSH,KC_EQL,
        _______,OSMLSFT,LAYER_2,KC_LEFT,KC_RGHT,KC_BSLS,KC_ENT
    ));

 

void setupKeymap() {

    uint32_t layer1[MATRIX_ROWS][MATRIX_COLS] =
        KEYMAP( \
  KC_F7,KC_F8,  KC_F9,  KC_F10,  KC_F11,  KC_F12,  KC_RO,  \
  KC_NO, KC_6,   KC_7,   KC_8,   KC_9,   KC_0,   KC_JYEN,  \
  KC_F19,  KC_LPRN, KC_LBRC,KC_LCBR,KC_RCBR,KC_RBRC,KC_RPRN,  \
  _______, OSMLSFT,LAYER_2,KC_F21,KC_F22,KC_F23,KC_F24 \
);

    uint32_t layer2[MATRIX_ROWS][MATRIX_COLS] =
        KEYMAP( \
  KC_CLCK, KC_MSEL,KC_PSLS,KC_P7,KC_P8,KC_P9,KC_PMNS,\
  KC_INS, KC_MPLY,KC_PAST,KC_P4,KC_P5,KC_P6,KC_PPLS,\
  KC_VOLU,KC_MPRV,KC_MNXT,KC_P1,KC_P2,KC_P3,KC_NO,  \
  _______, KC_VOLD,LAYER_2, KC_RCTL, KC_P0, KC_PDOT,KC_PENT \
);

    uint32_t layer3[MATRIX_ROWS][MATRIX_COLS] =
        KEYMAP( \
  KM_COLE,  KC_NO,  KC_NO, KC_NO,  KC_NO,KC_NO,  KC_NO,\
  KM_RKLG,  KC_NO,KC_NO,  KC_NO,KC_NO,KC_NO,  KC_NO, \
  KC_NO,  KC_NO,  KC_NO,  KC_NO,  KC_NO,  KC_NO,  KC_NO,\
  KC_NO,  KC_NO,  KC_NO,  KC_NO,  KC_NO,KC_NO,KC_NO \
);

    uint32_t layer4[MATRIX_ROWS][MATRIX_COLS] =
        KEYMAP( \
  KC_NO,  KC_NO,  KC_NO, KC_NO,  KC_NO,KC_NO,  KC_NO,\
  KC_NO,  KC_NO,KC_NO,  KC_NO,KC_NO,KC_NO,  KC_NO, \
  KC_NO,  KC_NO,  KC_NO,  KC_NO,  KC_NO,  KC_NO,  KC_NO,\
  KC_NO,  KC_NO,  KC_NO,  KC_NO,  KC_NO,KC_NO,KC_NO \
);

    /*
     * add the other layers
     */
    for (int row = 0; row < MATRIX_ROWS; ++row)
    {
        for (int col = 0; col < MATRIX_COLS; ++col)
        {
            matrix[row][col].addActivation(_LOWER, Method::PRESS, layer1[row][col]);
            matrix[row][col].addActivation(_RAISE, Method::PRESS, layer2[row][col]);
            matrix[row][col].addActivation(_FUNC, Method::PRESS, layer3[row][col]);
            matrix[row][col].addActivation(_ADJUST, Method::PRESS, layer4[row][col]);
        }
    }

}


void setupColemakKeymap() {
    uint32_t thislayer[MATRIX_ROWS][MATRIX_COLS] = KEYMAP(
        KC_UP,  KC_J,   KC_L,   KC_U,   KC_Y,   KC_SCLN,KC_DEL, 
        KC_DOWN,KC_H,   KC_N,   KC_E,   KC_I,   KC_O,   KC_QUOT,
        KC_LCTL,KC_K,   KC_M,   KC_COMM,KC_DOT, KC_SLSH,KC_EQL,
        _______,OSMLSFT,LAYER_2,KC_LEFT,KC_RGHT,KC_BSLS,KC_ENT
    );

    changeDefaultLayer(thisLayer);
}

void setupQwertyKeymap() {
    uint32_t thislayer[MATRIX_ROWS][MATRIX_COLS] = KEYMAP(
        KC_UP,  KC_Y,   KC_U,   KC_I,   KC_O,   KC_P,   KC_DEL, 
        KC_DOWN,KC_H,   KC_J,   KC_K,   KC_L,   KC_SCLN,KC_QUOT,
        KC_LCTL,KC_N,   KC_M,   KC_COMM,KC_DOT, KC_SLSH,KC_EQL,
        _______,OSMLSFT,LAYER_2,KC_LEFT,KC_RGHT,KC_BSLS,KC_ENT
    );

    changeDefaultLayer(thisLayer);
}

void setupRKLGKeymap() {
    uint32_t thislayer[MATRIX_ROWS][MATRIX_COLS] = KEYMAP(
        KC_UP,  KC_J,   KC_L,   KC_U,   KC_Y,   KC_SCLN,KC_DEL, 
        KC_DOWN,KC_H,   KC_N,   KC_E,   KC_I,   KC_O,   KC_QUOT,
        KC_LSFT,KC_K,   KC_M,   KC_COMM,KC_DOT, KC_SLSH,KC_EQL,
        _______,KC_SPC,LAYER_2,KC_LEFT,KC_RGHT,KC_BSLS,KC_ENT
    );

    changeDefaultLayer(thisLayer);
}

void setupFPSKeymap() {
    uint32_t thislayer[MATRIX_ROWS][MATRIX_COLS] = KEYMAP(
        KC_UP,  KC_J,   KC_L,   KC_U,   KC_Y,   KC_SCLN,KC_DEL, 
        KC_DOWN,KC_H,   KC_N,   KC_E,   KC_I,   KC_O,   KC_QUOT,
        LAYER_3,KC_K,   KC_M,   KC_COMM,KC_DOT, KC_SLSH,KC_EQL,
        _______,OSMLSFT,LAYER_2,KC_LEFT,KC_RGHT,KC_BSLS,KC_ENT
    );

    changeDefaultLayer(thisLayer);
}

#endif

void changeDefaultLayer(uint32_t km[MATRIX_ROWS][MATRIX_COLS]) {
    for (int row = 0; row < MATRIX_ROWS; ++row)
    {
        for (int col = 0; col < MATRIX_COLS; ++col)
        {
            matrix[row][col].addActivation(0, Method::PRESS, km[row][col]);
        }
    }
}

void process_user_macros(uint16_t macroid) {
    switch(macroid) {
        case KM_COLE:
            setupColemakKeymap();
            break;
        case KM_QWRT:
            setupQwertyKeymap();
            break;
        case KM_RKLG:
            setupRKLGKeymap();
            break;
        case KM_FFPS:
            setupFPSKeymap();
            break;
    }
}

void process_user_layers(uint16_t layermask) {
    KeyScanner::process_for_tri_layers(_LOWER, _RAISE, _ADJUST);
}
