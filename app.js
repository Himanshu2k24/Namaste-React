const heading = React.createElement("div",{id:"parent"},
                            React.createElement("div",{id:"child"},
                                [React.createElement("h1",{id:"h1"},"Hello from H1 tag"),
                                    React.createElement("h2",{id:"h2"},"Hello from H2 tag")]));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);