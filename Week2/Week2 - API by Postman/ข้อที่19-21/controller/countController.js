module.exports.countNumber = function(req, res) {
    let bodyData = req.body;
    let count = Object.keys(bodyData).length;
    res.status(200).send('BODY ' + JSON.stringify(bodyData) + ' -> ' + count);
}