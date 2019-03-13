const fs = require("fs")
const path = require("path")
const fetch = require("node-fetch")
const _ = require("lodash")

const values = 
{
    "#2e3440": "#252933",
    "#434c5e": "#333b4b",
    "#3b4252": "#2b303b",
    "#d8dee966": "#d8dee98c",
    "#4c566a": "#cccccc71"
}

function replace(obj, path)
{
    let color = _.get(obj, path).toLowerCase()
    let replacement = values[color]

    if(replacement)
    {
        _.set(obj, path, replacement)
    }
}

fetch("https://raw.githubusercontent.com/arcticicestudio/nord-visual-studio-code/develop/themes/nord.json")

.then(res =>
{
    return res.json()
})

.then(obj =>
{
    obj.name = "Nordico"

    for(let key in obj.colors)
    {
        replace(obj, `colors["${key}"]`)
    }

    let n = 0

    for(let item of obj.tokenColors)
    {
        for(let property in item.settings)
        {
            replace(obj, `tokenColors[${n}].settings["${property}"]`)
        }

        n += 1
    }

    obj.colors["activityBar.background"] = "#282d38",
    obj.colors["activityBarBadge.background"] = "#a9c3ca",
    obj.colors["activityBarBadge.foreground"] = "#000000",

    obj.colors["badge.background"] = "#a9c3ca",
    obj.colors["badge.foreground"] = "#000000"

    obj.colors["editor.selectionBackground"] = "#55807183",
    obj.colors["editor.selectionHighlightBackground"] = "#434c5e7a",
    obj.colors["editor.hoverHighlightBackground"] = "#55807183"

    obj.colors["scrollbarSlider.background"] = "#31384699",	

    obj.colors["list.activeSelectionBackground"] = "#333b4b",
    obj.colors["list.activeSelectionForeground"] = "#d8dee9",
    obj.colors["list.inactiveSelectionBackground"] = "#333b4b",
    obj.colors["list.inactiveSelectionForeground"] = "#d8dee9",
    obj.colors["list.hoverForeground"] = "#e6e6e6",
    obj.colors["list.focusForeground"] = "#e6e6e6",
    obj.colors["list.focusBackground"] = "#3e4657",
    obj.colors["list.hoverBackground"] = "#2d3341",
    obj.colors["list.inactiveFocusBackground"] = "#534c722a",
    obj.colors["list.dropBackground"] = "#565ca352"

    obj.colors["tab.hoverBackground"] = "#383c4e6b",

    fs.writeFile(path.join("themes", "Nordico.json"), JSON.stringify(obj, null, 4), 'utf8', function(err)
    {
        if(err)
        {
            console.error(err)
        }
    })
})