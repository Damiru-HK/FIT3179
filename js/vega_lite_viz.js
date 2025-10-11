var spec_history = "js/history_viz.json";
vegaEmbed('#history_viz', spec_history).then(function(result){
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error)

var spec_map = "js/venue_avg_score.json";
vegaEmbed('#map_viz', spec_map).then(function(result){
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error)

var spec_dotplot = "js/socre_comparison_viz.json";
vegaEmbed('#dotplot_viz', spec_dotplot).then(function(result){
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error)

var spec_bar = "js/batting_advantage.json";
vegaEmbed('#bar_viz', spec_bar).then(function(result){
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error)

var spec_final = "js/critical_matches.json";
vegaEmbed('#final_viz', spec_final).then(function(result){
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error)