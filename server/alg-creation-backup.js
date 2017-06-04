/*
const createAlgorithms  = () => {
    let data = {};

    data = {
        category: 'OLL',
        image: 'oll_1.png',
        ref: 1,
        scramble: "RU2 R' U' RUR' U' RU' R' U'",
        solution: "RU2 R' U' RUR' U' RU' R'",
        type: 'cross'
    };

    Meteor.call('algorithms.insert', data);

    data = {
        category: 'OLL',
        image: 'oll_2.png',
        ref: 2,
        scramble: "RU2 R2 U' R2U' R2U2R",
        solution: "(RU2 R2 U') (R2U') (R2U2R)",
        type: 'cross'
    };

    Meteor.call('algorithms.insert', data);


    data = {
        category: 'OLL',
        image: 'oll_3.png',
        ref: 3,
        scramble: "x' (RUR' DRU' R' D' F)",
        solution: "x' (RU' R' DRUR' D')",
        type: 'cross'
    };

    Meteor.call('algorithms.insert', data);


    data = {
        category: 'OLL',
        image: 'oll_4.png',
        ref: 4,
        scramble: "RU2RDR' U2RD' R2 U2",
        solution: "R2D' RU2R'DRU2R",
        type: 'cross'
    };

    Meteor.call('algorithms.insert', data);


    data = {
        category: 'OLL',
        image: 'oll_5.png',
        ref: 5,
        scramble: "x' (RU' R' DRUR' D')",
        solution: "x' (RUR' DRU' R' D')",
        type: 'cross'
    };

    Meteor.call('algorithms.insert', data);


    data = {
        category: 'OLL',
        image: 'oll_6.png',
        ref: 6,
        scramble: "RUR' URU2R' U",
        solution: "L' U' LU' L' U2L",
        type: 'cross'
    };

    Meteor.call('algorithms.insert', data);


    data = {
        category: 'OLL',
        image: 'oll_7.png',
        ref: 7,
        scramble: "L' U' LU' L' U2LU'",
        solution: "RUR' URU2R'",
        type: 'cross'
    };


    data = {
        category: 'OLL',
        image: 'oll_8.png',
        ref: 8,
        scramble: "FR' F' RUR2B' R' BU' R'",
        solution: "(RU2R2FR) (F' U2R' FRF')",
        type: 'dot'
    };

    Meteor.call('algorithms.insert', data);


    data = {
        category: 'OLL',
        image: 'oll_9.png',
        ref: 9,
        scramble: "FR' F' RU2FR' F' RU' RU' R' U2",
        solution: "LF' L' FU2FU' RU' R' F'",
        type: 'dot'
    };

    Meteor.call('algorithms.insert', data);


    data = {
        category: 'OLL',
        image: 'oll_10.png',
        ref: 10,
        scramble: "FR' F' RU2R d' RU' R' F' U'",
        solution: "(RU2R2FRF' U2) M' URU' L'",
        type: 'dot'
    };

    Meteor.call('algorithms.insert', data);


    data = {
        category: 'OLL',
        image: 'oll_11.png',
        ref: 11,
        scramble: "RU2R2FRF' U2R' FRF' U2",
        solution: "(FRUR' U' F') (fRUR' U' f')",
        type: 'dot'
    };

    Meteor.call('algorithms.insert', data);


    data = {
        category: 'OLL',
        image: 'oll_12.png',
        ref: 12,
        scramble: "R' F' U2F2URU' R' F' U2R",
        solution: "R' U2FRUR' U' F2U2FR",
        type: 'dot'
    };

    Meteor.call('algorithms.insert', data);


    data = {
        category: 'OLL',
        image: 'oll_13.png',
        ref: 13,
        scramble: "MU' LF2L' U' RU' R2 r",
        solution: "MUR' F2RUL' U L2 l'",
        type: 'dot'
    };

    Meteor.call('algorithms.insert', data);


    data = {
        category: 'OLL',
        image: 'oll_14.png',
        ref: 14,
        scramble: "MUR' F2RUL' U L2 l'",
        solution: "MU' LF2L' U' RU' R2 r",
        type: 'dot'
    };

    Meteor.call('algorithms.insert', data);


    data = {
        category: 'OLL',
        image: 'oll_15.png',
        ref: 15,
        scramble: "(MUMUMUMU) (M' UM' UM' UM' U)",
        solution: "M (URUR' U') M2 (U RU' r')",
        type: 'dot'
    };



    data = {
        category: 'OLL',
        image: 'oll_16.png',
        ref: 16,
        scramble: "(R' FRUR' U') (F' UR)",
        solution: "R' U' FURU' R' F' R",
        type: "Letter 'P'"
    };

    Meteor.call('algorithms.insert', data);


    data = {
        category: 'OLL',
        image: 'oll_17.png',
        ref: 17,
        scramble: "(L F' L' U' L U) (F U' L')",
        solution: "LUF' U' L' ULFL'",
        type: "Letter 'P'"
    };

    Meteor.call('algorithms.insert', data);


    data = {
        category: 'OLL',
        image: 'oll_18.png',
        ref: 18,
        scramble: "F (RUR' U') F'",
        solution: "FURU' R' F'",
        type: "Letter 'P'"
    };

    Meteor.call('algorithms.insert', data);


    data = {
        category: 'OLL',
        image: 'oll_19.png',
        ref: 19,
        scramble: "F' (L' U' LU) F",
        solution: "F' U' L' ULF",
        type: "Letter 'P'"
    };

    Meteor.call('algorithms.insert', data);


    data = {
        category: 'OLL',
        image: 'oll_20.png',
        ref: 20,
        scramble: "B' RBR' U' R' U' RUR' URU2",
        solution: "(L' U' LU' L' U) (LULF' L' F)",
        type: "Letter 'W'"
    };

    Meteor.call('algorithms.insert', data);


    data = {
        category: 'OLL',
        image: 'oll_21.png',
        ref: 21,
        scramble: "FR' F' RURUR' U' RU' R'",
        solution: "(RUR' URU') (R' U' R' FRF')",
        type: "Letter 'W'"
    };

    Meteor.call('algorithms.insert', data);


    data = {
        category: 'OLL',
        image: 'oll_22.png',
        ref: 22,
        scramble: "R' F' LF' L' FLF' L' F2RU'",
        solution: "(R' F' LF') ( L' FLF' L' F2R)",
        type: "Dash"
    };

    Meteor.call('algorithms.insert', data);


    data = {
        category: 'OLL',
        image: 'oll_23.png',
        ref: 23,
        scramble: "LFR' FRF' R' FRF2L' U",
        solution: "LFR' FRF' R' FRF2L'",
        type: "Dash"
    };

    Meteor.call('algorithms.insert', data);


    data = {
        category: 'OLL',
        image: 'oll_24.png',
        ref: 24,
        scramble: "F' U' L' ULU' L' ULF",
        solution: "F' (L' U' LU) (L' U' LU) F",
        type: "Dash"
    };

    Meteor.call('algorithms.insert', data);


    data = {
        category: 'OLL',
        image: 'oll_25.png',
        ref: 25,
        scramble: "F URU' R' URU' R' F'",
        solution: "F (RUR' U') (RUR' U') F'",
        type: "Dash"
    };

    Meteor.call('algorithms.insert', data);


    data = {
        category: 'OLL',
        image: 'oll_26.png',
        ref: 26,
        scramble: "(r U') (r2 U) (r2 U r2 U' r)",
        solution: "(r' U) (r2U') (r2U') (r2Ur')",
        type: "Dash"
    };

    Meteor.call('algorithms.insert', data);


    data = {
        category: 'OLL',
        image: 'oll_27.png',
        ref: 27,
        scramble: "(r' U) (r2U') (r2U') (r2Ur')U2",
        solution: "(lU') (l2U) (l2U) (l2U' l)",
        type: "Dash"
    };

    Meteor.call('algorithms.insert', data);


    data = {
        category: 'OLL',
        image: 'oll_28.png',
        ref: 28,
        scramble: "L F' L' U' L F L' y L' U L",
        solution: "L' U' L y' LF' L' ULFL'",
        type: "Dash"
    };

    Meteor.call('algorithms.insert', data);


    data = {
        category: 'OLL',
        image: 'oll_29.png',
        ref: 29,
        scramble: "R' F R U R' F' R y' R U' R'",
        solution: "RUR' y R' FRU' R' F' R",
        type: "Dash"
    };

    Meteor.call('algorithms.insert', data);


    data = {
        category: 'OLL',
        image: 'oll_30.png',
        ref: 30,
        scramble: "B' FR' F' RBURU' R' U2",
        solution: "(R' U' RU F) x' (R U' R' UD')",
        type: "Letter 'C'"
    };

    Meteor.call('algorithms.insert', data);


    data = {
        category: 'OLL',
        image: 'oll_31.png',
        ref: 31,
        scramble: "RUB' RBR' U' R'",
        solution: "(R' U' R' F) (RF' U) R",
        type: "Letter 'C'"
    };


    data = {
        category: 'OLL',
        image: 'oll_32.png',
        ref: 32,
        scramble: "FR' F' RURU' R'",
        solution: "(RUR' U') (R' FRF')",
        type: "Letter 'T'"
    };

    Meteor.call('algorithms.insert', data);


    data = {
        category: 'OLL',
        image: 'oll_33.png',
        ref: 33,
        scramble: "FURU' R' F'",
        solution: "F (RUR' U') F'",
        type: "Letter 'T'"
    };

    Meteor.call('algorithms.insert', data);


    data = {
        category: 'OLL',
        image: 'oll_34.png',
        ref: 34,
        scramble: "B' RBU2R' U' RU' R2U2R",
        solution: "(RU2R2U' RU' R' U2) (F R F')",
        type: "Letter 'I'"
    };

    Meteor.call('algorithms.insert', data);


    data = {
        category: 'OLL',
        image: 'oll_35.png',
        ref: 35,
        scramble: "F (RUR' U') (RUR' U') F'",
        solution: "F (URU' R' URU' R') F'",
        type: "Letter 'I'"
    };

    Meteor.call('algorithms.insert', data);


    data = {
        category: 'OLL',
        image: 'oll_36.png',
        ref: 36,
        scramble: "L' B' LR' U' RUR' U' RUL' BL",
        solution: "(L' B' LU') (R' URU' R' URL' BL)",
        type: "Letter 'I'"
    };

    Meteor.call('algorithms.insert', data);


    data = {
        category: 'OLL',
        image: 'oll_37.png',
        ref: 37,
        scramble: "(R' U' RU' R' U) y' (R' URB)U'",
        solution: "(R' U' RU' R' U) y' (R' URB)",
        type: "Letter 'I'"
    };

    Meteor.call('algorithms.insert', data);


    data = {
        category: 'OLL',
        image: 'oll_38.png',
        ref: 38,
        scramble: "R' F' LF' L' F2R",
        solution: "R' F2LFL' FR",
        type: "Square"
    };

    Meteor.call('algorithms.insert', data);


    data = {
        category: 'OLL',
        image: 'oll_39.png',
        ref: 39,
        scramble: "LFR' FRF2L'",
        solution: "L F2R' F' RF' L'",
        type: "Square"
    };

    Meteor.call('algorithms.insert', data);


    data = {
        category: 'OLL',
        image: 'oll_40.png',
        ref: 40,
        scramble: "R' U2 l U' RUR' l' U2R",
        solution: "x' (R' F2R2U' R' UR' F2R)",
        type: "Square"
    };

    Meteor.call('algorithms.insert', data);


    data = {
        category: 'OLL',
        image: 'oll_41.png',
        ref: 41,
        scramble: "(RUR' U') (R' FRF')",
        solution: "FR' F' RURU' R'",
        type: "Square"
    };

    Meteor.call('algorithms.insert', data);


    data = {
        category: 'OLL',
        image: 'oll_42.png',
        ref: 42,
        scramble: "L F2R' F' RF' L'",
        solution: "LFR' FRF2L'",
        type: "Letter 'S'"
    };

    Meteor.call('algorithms.insert', data);


    data = {
        category: 'OLL',
        image: 'oll_43.png',
        ref: 43,
        scramble: "R' F2LFL' FR",
        solution: "R' F' LF' L' F2R",
        type: "Letter 'S'"
    };

    Meteor.call('algorithms.insert', data);


    data = {
        category: 'OLL',
        image: 'oll_44.png',
        ref: 44,
        scramble: "MU' RU2R' U' RU' R2rU2",
        solution: "R' L2FL' FLF2L' FL' R",
        type: "Letter 'S'"
    };

    Meteor.call('algorithms.insert', data);


    data = {
        category: 'OLL',
        image: 'oll_45.png',
        ref: 45,
        scramble: "M' UR' U2RUR' UR2 r'",
        solution: "LR2F' RF' R' F2RF' L' R",
        type: "Letter 'S'"
    };

    Meteor.call('algorithms.insert', data);


    data = {
        category: 'OLL',
        image: 'oll_46.png',
        ref: 46,
        scramble: "B2R' URU' R' U' R2BR' BU2",
        solution: "F' LF' L2ULUL' U' LF2",
        type: "Letter 'S'"
    };

    Meteor.call('algorithms.insert', data);


    data = {
        category: 'OLL',
        image: 'oll_47.png',
        ref: 47,
        scramble: "l U' l' U' R2UR' BRU' R2U2",
        solution: "FR' FR2U' R' U' RUR' F2",
        type: "Letter 'S'"
    };

    Meteor.call('algorithms.insert', data);


    data = {
        category: 'OLL',
        image: 'oll_48.png',
        ref: 48,
        scramble: "B' U' R' U' R y URU2R' U' RU'",
        solution: "(R' FRF' R' FRF') (RU R' U' RUR')",
        type: "Letter 'S'"
    };

    Meteor.call('algorithms.insert', data);


    data = {
        category: 'OLL',
        image: 'oll_49.png',
        ref: 49,
        scramble: "FURUR' y' U' R' U2RUR' U'",
        solution: "(LF' L' FLF' L' F) (L' U' L UL' U' L)",
        type: "Letter 'S'"
    };

    Meteor.call('algorithms.insert', data);


    data = {
        category: 'OLL',
        image: 'oll_50.png',
        ref: 50,
        scramble: "LUF' U' L' ULFL'",
        solution: "(L F' L' U' L U) (F U' L')",
        type: "Lightning"
    };

    Meteor.call('algorithms.insert', data);


    data = {
        category: 'OLL',
        image: 'oll_51.png',
        ref: 51,
        scramble: "R' U' FURU' R' F' R",
        solution: "(R' FRUR' U') (F' UR)",
        type: "Lightning"
    };

    Meteor.call('algorithms.insert', data);


    data = {
        category: 'OLL',
        image: 'oll_52.png',
        ref: 52,
        scramble: "L' U' L y' LF' L' ULFL'",
        solution: "(LF' L' U' LFL') y' (R' UR)",
        type: "Letter 'L'"
    };

    Meteor.call('algorithms.insert', data);


    data = {
        category: 'OLL',
        image: 'oll_53.png',
        ref: 53,
        scramble: "RUR' y R' FRU' R' F' R",
        solution: "(R' FRUR' F' R) y (LU' L')",
        type: "Letter 'L'"
    };

    Meteor.call('algorithms.insert', data);


    data = {
        category: 'OLL',
        image: 'oll_54.png',
        ref: 54,
        scramble: "L' B' L U' R' U R L' B L",
        solution: "(L' B' L) (R' U' RU) (L' BL)",
        type: "Letter 'L'"
    };

    Meteor.call('algorithms.insert', data);


    data = {
        category: 'OLL',
        image: 'oll_55.png',
        ref: 55,
        scramble: "L F L' U R U' R' LF' L' U2",
        solution: "(RBR') (LUL' U') (RB' R')",
        type: "Letter 'L'"
    };

    Meteor.call('algorithms.insert', data);


    data = {
        category: 'OLL',
        image: 'oll_56.png',
        ref: 56,
        scramble: "(RL' BLR') U2 (RL' BLR')U'",
        solution: "(RL' BLR') U2 (RL' BLR')",
        type: "Letter 'F'"
    };

    Meteor.call('algorithms.insert', data);


    data = {
        category: 'OLL',
        image: 'oll_57.png',
        ref: 57,
        scramble: "F R' F' R L' U R U' R' L",
        solution: "(RUR' U') r (R' URU' r')",
        type: "Letter 'H'"
    };

    Meteor.call('algorithms.insert', data);
};
*/