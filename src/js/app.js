const CustomReact = {
    createElement: function (type, props, children) {
        let element;

        if (type && typeof type === 'string') {
            element = document.createElement(type);
        } else {
            throw Error('Element type is not valid!');
        }

        this.appendChildren(element, children);

        this.applyProps(element, props);

        return element;
    },

    render: function (elem, appendTo) {
        if (!this.isContainerValid(appendTo)) {
            throw Error('Container is not valid!');
        } else {
            appendTo.appendChild(elem);
        }
    },

    isContainerValid: function (node) {
        const ELEMENT_NODE = 1;

        if (node && node.nodeType === ELEMENT_NODE) {
            return true;
        } else {
            return false;
        }
    },

    applyProps: function (element, props) {
        if (props) {
            if (typeof props !== 'object') {
                throw Error('Props type is not valid. Props must be an object.');
            }

            let keys = Object.keys(props);
            for (let key of keys) {
                if (typeof props[key] === 'object') {
                    let objKeys = Object.keys(props[key]);

                    for (let i of objKeys) {
                        element[key][i] = props[key][i];
                    }
                } else {
                    element[key] = props[key];
                }
            }
        }
    },

    appendChildren: function (element, children) {
        if (children) {
            if (typeof children !== 'string' && typeof children !== 'object') {
                throw Error('Argument "children" is not valid');
            }

            if (typeof children === 'string') {
                element.innerHTML = children;
            }

            if (typeof children === 'object') {
                if (!children.length) {
                    element.appendChild(children);
                } else {
                    children.map(child => {
                        if (typeof child === 'string') {
                            let textNode = document.createTextNode(child);
                            element.appendChild(textNode);
                        } else {
                            element.appendChild(child);
                        }
                    });
                }
            }
        }
    }
};