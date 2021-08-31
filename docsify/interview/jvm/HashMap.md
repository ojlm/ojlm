# HashMap

> An instance of `HashMap` has two parameters that affects its performance: `initial capacity` and `load factor`. The `capacity` is the number of buckets in the hash table, and the initial capacity is simply the capacity at the time the hash table is created. The `load factor` is a measure of how full the hash table is alowed to get before its capacity is automatically increased. When the number of entries in the hash table exceeds the product of the laod factor and the current capacity, the hash table is `reshased` (that is , internal data structure are rebuilt) so that the hash table has approximately twice the number of buckets.

```java
// The default initial capacity - MUST be a power of two.
static final int DEFAULT_INITIAL_CAPACITY = 1 << 4; // aka 16
static final int MAXINUM_CAPACITY = 1 << 30;

// The load factor used when none specified in constructor.
static final float DEFAULT_LOAD_FACTOR = 0.75f;
// The bin count threshold for using a tree rather than list for a bin.
static final int TREEIFY_THRESHOLD = 8;
static final int UNTREEIFY_THRESHOLD = 6;

// The smallest table capacity for which bins may be treeified.
static final int MIN_TREEIFY_CAPACITY = 64;
```

```java
/**
* Basic hash bin node, used for most entries.
* See for TreeNode subclass, and in LinkedHashMap for its Entry subclass.
**/
static class Node<K, V> implements Map.Entry<K, V> {
    final int hash;
    final K key;
    V value;
    Node<K, V> next;
    
    Node(int hash, K key, V value, Node<K, V> next) {
        this.hash = hash;
        this.key = key;
        this.value = value;
        this.next = next;
    }
    ...
    public final int hashCode() {
        /** Objects.hashCode implementations.
        * public static int hashCode(Object o) {
        *    return o != null ? o.hashCode() : 0;
        * }
        */ 
        return Objects.hashCode(key) ^ Objects.hashCode(value);
    }
}
```

## Static utilities

```java
static final int hash(Object key) {
    int h;
    return (key == null) ? 0 : (h = key.hashCode()) ^ (h >> 16);
}
```

## Fields

```java
// The table, initialized on first use, and resized as necessary. 
// When allocated, length is always a power of two. 
// We also tolerate length zero in some operations to allow bootstrapping mechanics that are currently not needed.
transient Node<K, V>[] table;

// Holds cached entrySet(). Note that AbstractMap fieds are used for keySet() and values().
transient Set<Map.Entry<K, V>> entrySet;

// The number of key-value mappings contained in this map
transient int size;

// The number of times this HashMap has been structurally modified.
// Structural modifications are those that change the number of mappings in the HashMap or otherwise modify its internal stucture (e.g., rehash).
// This field is used to make iterators on Collection-views of the HashMap fail-fast.
transient int modCount;

// The next size value at which to resize (capacity * load factor).
int threshold;

// The load factor for the hash table.
final float loadFactor;
```

## Public operations
```java
public HashMap(int initialCapacity, float loadFactor) {
    if (initialCapacity < 0) {
        throw new IllegalArgumentException("Illegal initial capacity: " + initialCapacity);
    }
    if (initialCapacity > MAXINUM_CAPACITY) {
        initialCapacity = MAXINUM_CAPACITY;
    }
    if (loadFactor <= 0 || Float.isNaN(loadFactor)) {
        throw new IllegalArgumentException("Illegal load factor: " + loadFactor);
    }
    this.loadFactor = loadFactor;
    // tableSizeFor: returns a power of two size for the given target capacity.
    this.threshold = tableSizeFor(initialCapacity);
}

public V get(Object key) {
    Node<K, V> e;
    return (e = getNode(hash(key), key) == null ? null : e.value;
}

// Implements Map.get and related methods
final Node<K, V> getNode(int hash, Object key) {
    Node<K, V>[] tab; Node<K, V> first, e; int n; K k;
    if ((tab = table) != null && (n = tab.length) > 0 && (first = tab[(n - 1) & hash]) != null) {
        if (first.hash == hash && // always check first node
            ((k = fist.key) == key || (key != null && key.equals(k)))) 
        {
            return first;
        }
        if ((e = fist.next) != null) {
            if (first instanceof TreeNode) {
                return ((TreeNode<K, V>first).getTreeNode(hash, key);
            }
            do {
                if (e.hash == hash && ((k = e.key) == key || (key != null && key.equals(k)))) {
                    return e;
                }
            } while ((e = e.next) != null);
        }
    }
    return null;
}

public V put(K key, V value) {
    return putVal(hash(key), key, value, false, true);
}

final V putVal(int hash, K key, V value, boolean onlyIfAbsent /*if true, don't change existing value*/, boolean evict /*if false, the table is in creation mode.*/) {
    Node<K, V>[] tab; Node<K, V> p; int n, i;
    if ((tab = table) == null || (n = tab.length) == 0) {
        n = (tab = resize()).length;
    }
    if ((p = tab[i = (n -1) & hash]) == null ) {
        // Node 不存在, 新建
        tab[i] = newNode(hash, key, value, null);
    } else {
        // Node 存在
        Node<K, V> e; K k;
        if (p.hash == hash && ((k = p.key) == key || (key != null && key.equals(k)))) {
            e = p;
        } else if (p instanceof TreeNode) {
            e = ((TreeNode<K, V>)p).putTreeVal(this, tab, hash, key, value);
        } else {
            for (in binCount = 0; ; binCount++) {
                if ((e = p.next) == null) {
                    p.next = newNode(hash, key, value, next);
                    if (binCount >= TREEIFY_THRESHOLD - 1) {
                        treeifyBin(tab, hash);
                    }
                    break;
                }
                if (e.hash == hash && ((k = e.key) == key || (key != null && key.equals(k)))) {
                    break;
                }
                p = e;
             }
        }
        if (e != null) { // existing mapping for key
            V oldValue = e.value;
            if (!onlyIfAbsent || oldValue == null) {
                e.value = value;
            }
            afterNodeAccess(e);
            return oldValue;
        }
    }
    ++modCount;
    if (++size > threshold) {
        resize();
    }
    afterNodeInsertion(evict);
    return null;
}

```

## TreeNode
```java
// LinkedHashMap.java
static class Entry<K, V> extends HashMap.Node<K, V> {
    Entry<K, V> before, after;
    Entry(int hash, K key, V value, Node<K, V> next) {
        super(hash, key, value, next);
    }
}
// Tree bins. Entry for Tree bins. Extends LinkedHashMap.Entry (which in turn extends Node) so can be used as
// extension of either regular or linked node.

static final class TreeNode<K, V> extends LinkedHashMap.Entry<K, V> {
    TreeNode<K, V> parent;  // red-black tree links
    TreeNode<K, V> left;
    TreeNode<K, V> right;
    TreeNode<K, V> prev;    // needed to unlink next upon deletion
    boolean red;

    TreeNode(int hash, K key, V val, Node<K, V> next) {
        super(hash, key, val next);
    }

    final TreeNode<K, V> root() {
        for (TreeNode<K, V> r = this, p;;) {
            if ((p = r.parent) == null) {
                return r;
            }
            r = p;
        }
    }


    // Finds the node starting at root p with the given hash and key.
    // The kc argument caches comparableClassFor(key) upon first use comparing keys.
    final TreeNode<K, V> find(int h, Object k, Class<?> kc) {
        TreeNode<K, V> p = this;
        do {
            int ph, dir; K pk;
            TreeNode<K, V> pl = p.left, pr = p.right, q;
            if ((ph = p.hash) > h)
                p = pl;
            else if (ph < h)
                p = pr;
            else if ((ph = p.key) == k || (k != null && k.equals(pk)))
                return p;
            else if (pl == null)
                p = pr;
            else if (pr == null) 
                p = pl;
            else if ((kc != null || (kc = comparableClassFor(k)) != null && (dir = compareComparables(kc, k, pk)) != 0))
                p = (dir < 0) ? pl : pr;
            else if ((q = pr.find(h, k, kc)) != null)
                return q;
            else
                p = pl;
        } while (p != null);
        return null;
    }
    ...
}
```
