const CustomReact = {
    createElement: function (type, props, children) {
        let element = document.createElement(type);

        if (children && typeof children === 'string') {
            element.innerHTML = children;
        }

        if (children && typeof children === 'object') {
            children.forEach(child => {
                if (typeof child === 'string') {
                    let textNode = document.createTextNode(child);
                    element.appendChild(textNode);
                } else {
                    element.appendChild(child);
                }
            });
        }

        if (props) {
            for (let key in props) {
                if (props.hasOwnProperty(key)) {
                    if (typeof props[key] === 'object') {
                        for (let i in props[key]) {
                            if (props[key].hasOwnProperty(i)) {
                                element[key][i] = props[key][i];
                            }
                        }
                    } else {
                        element[key] = props[key];
                    }
                }
            }
        }

        return element;
    },

    render: function (elem, appendTo) {
        if (!this.isValidContainer(appendTo)) {
            throw Error('Container is not valid!');
        } else {
            appendTo.appendChild(elem);
        }
    },

    isValidContainer: function (node) {
        const ELEMENT_NODE = 1;
        const DOCUMENT_NODE = 9;
        return !!(node && (node.nodeType === ELEMENT_NODE || node.nodeType === DOCUMENT_NODE));
    }
};