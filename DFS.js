const dfs = function (start, target) {
    console.log("Visiting Node " + start.value);
    if (start.value === target) {
        console.log("node found");
        return start;
    }
    for (var i = 0; i < start.children.length; i++) {
        var result = dfs(start.children[i], target);
        if (result != null) {
            return result;
        }
    }
    console.log(  start.value );
    return null;
};

module.exports = {dfs};
