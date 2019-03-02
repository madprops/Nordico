const fs = require("fs")
const path = require("path")
const fetch = require("node-fetch")

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
        let color = obj.colors[key]

        if(color === "#2e3440")
        {
            obj.colors[key] = "#252933"
        }

        else if(color === "#434c5e")
        {
            obj.colors[key] = "#333b4b"
        }

        else if(color === "#3b4252")
        {
            obj.colors[key] = "#2b303b"
        }
    }

    obj.colors["editor.selectionBackground"] = "#55807183",
    obj.colors["editor.selectionHighlightBackground"] = "#434c5e7a",
    obj.colors["activityBar.background"] = "#282d38",
    obj.colors["scrollbarSlider.background"] = "#31384699",

    obj.colors["list.inactiveSelectionForeground"] = "#d8dee9",
    obj.colors["list.activeSelectionForeground"] = "#d8dee9",
		
    obj.colors["activityBarBadge.background"] = "#a9c3ca",
    obj.colors["activityBarBadge.foreground"] = "#000000",
    obj.colors["badge.background"] = "#a9c3ca",
    obj.colors["badge.foreground"] = "#000000"

    obj.colors["list.hoverForeground"] = "#e6e6e6",
    obj.colors["list.focusForeground"] = "#e6e6e6",
    obj.colors["list.focusBackground"] = "#3e4657",
    obj.colors["list.hoverBackground"] = "#2d3341"

    fs.writeFile(path.join("themes", "Nordico.json"), JSON.stringify(obj, null, 4), 'utf8', function(err)
    {
        if(err)
        {
            console.error(err)
        }
    })
})