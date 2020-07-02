const validate = require('mongoose-validator');

exports.nameValidator = [
    validate({
        validator: 'isLength',
        arguments: [3, 30],
        message: 'Le nom de la sauce doit faire entre 3 et 30 caractères',
    }),
    validate({
        validator: 'matches',
        arguments: /^[a-zA-Z\u00c0-\u00FF\s]*$/,
        message: 'Le nom de la sauce ne doit contenir que des lettres',
    })
];

exports.manufacturerValidator = [
    validate({
        validator: 'isLength',
        arguments: [3, 20],
        message: 'Le nom du fabricant de la sauce doit faire entre 3 et 20 caractères',
    }),
    validate({
        validator: 'matches',
        arguments: /^[a-zA-Z\u00c0-\u00FF\s]*$/,
        message: 'Le nom du fabricant de la sauce ne doit contenir que des lettres',
    })
];

exports.descriptionValidator = [
    validate({
        validator: 'isLength',
        arguments: [5, 150],
        message: 'La description de la sauce doit faire entre 5 et 150 caractères',
    }),
    validate({
        validator: 'matches',
        arguments: /^[a-zA-Z\u00c0-\u00FF\s]*$/,
        message: 'La description de la sauce ne doit contenir que des lettres',
    })
];

exports.mainPepperValidator = [
    validate({
        validator: 'isLength',
        arguments: [3, 20],
        message: "L'ingrédient principal de la sauce doit faire entre 3 et 20 caractères",
    }),
    validate({
        validator: 'matches',
        arguments: /^[a-zA-Z\u00c0-\u00FF\s]*$/,
        message: "L'ingrédient principal de la sauce ne doit contenir que des lettres",
    })
];