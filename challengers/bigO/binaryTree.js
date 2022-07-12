class Node {

    Value = null;
    constructor(value) {
        this.Value = value;
    }

    get Esq() {
        return this.nodeEsq;
    }

    get Dir() {
        return this.nodeDir;
    }

    get Value() {
        return this.Value;
    }

    set Esq(value) {
        this.nodeEsq = value;
    }

    set Dir(value) {
        this.nodeDir = value;
    }
}

class Tree {

    constructor(value) {
        this.rootNode = new Node(value);
    }

    get root() {
        return this.rootNode;
    }

    add(value) {
        this.#add(null, value)
    }

    #add(node, value) {
        if (!node) {
            node = this.rootNode
        }

        if (value < node.Value) {
            if (!node.Esq) {
                node.Esq = new Node(value)
            } else {
                this.#add(node.Esq, value);
            }
        } else {
            if (!node.Dir) {
                node.Dir = new Node(value)
            } else {
                this.#add(node.Dir, value);
            }
        }
    }
}

var binaryTree = new Tree(2);
function increment() {
    for (let index = 0; index < 11; index++) {
        binaryTree.add(index);
    }
}

function simetricRun() {
    const tree = Object.values(binaryTree);

    function getNext(node) {
        if (node) {
            console.log('next', node.Value)

            getNext(node);
        }
    }

    tree.forEach(node => {
        if (node) {
            console.log('esquerdo', node.Esq.Value)
            console.log('next esq', getNext(node.Esq))

            console.log('root', node.Value)
            console.log('direito', node.Dir.Value)
            console.log('next dir', getNext(node.Dir))
        }
    });
}

increment();
simetricRun();