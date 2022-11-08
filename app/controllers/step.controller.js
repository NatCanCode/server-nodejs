const db = require('../config/db.config.js');
const env = require('../config/env.js');

const Step = db.steps;

//Post a Step
exports.create = (request, response) => {
    //Save to MySQL database
    Step.create({
        recipeId: request.body.recipeId,
        number: request.body.number,
        description: request.body.description
    }).then(step => {
        response.send(step);
    });
};

//FETCH all Steps
exports.findAll = (request, response) => {
    Step.findAll({
        include: ["recipes"]
    }).then(steps => {
        response.send(steps);
    });
};

//Find a Step by Id
exports.findByPk = (request, response) => {
    Step.findByPk(request.params.stepId, {
        include: ["recipes"]
    }).then(step => {
        response.send(step);
    });
};

exports.update = (request, response) => {
    const id = request.params.steptId;
    Step.update({
        number: request.body.number,
        description: request.body.description
    }, {
        where: {
            stepId: id
        }
    }).then(() => {
        response.status(200).send({
            message: 'updated successfully a step with id = ' + id
        });
    });
};

//Delete a Step by Id
exports.delete = (request, response) => {
    const id = request.params.stepId;
    Step.destroy({
        where: { stepId: id }
    }).then(() => {
        response.status(200).send({
            message: 'deleted successfully a step with id = ' + id
        });
    });
};