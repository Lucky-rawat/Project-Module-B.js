class Node {
    constructor(val) {
        this.key = val;
        this.left = null;
        this.right = null;
    }
}
    var root = null;
    function Postorder(node) {
        if (node == null)
            return;
        Postorder(node.left);
        Postorder(node.right);
        document.write(node.key + " ");
    }
    function Inorder(node) {
        if (node == null)
            return;
        Inorder(node.left);
        document.write(node.key + " ");
        Inorder(node.right);
    }
    function Preorder(node) {
        if (node == null)
            return;
        document.write(node.key + " ");
 
        Preorder(node.left);

        Preorder(node.right);
        
    }
        root = new Node(12);
        root.left = new Node(26);
        root.right = new Node(53);
        root.left.left = new Node(14);
        root.left.right = new Node(35);
 
        document.write("Preorder traversal");
        Preorder(root);
 
        document.write("Inorder traversal");
        Inorder(root);
 
        document.write("Postorder traversal");
        Postorder(root);
