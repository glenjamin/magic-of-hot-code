; Stateful modules in clojure

(ns emoji)
(def items {:horse "🐴",
            :monkey "🐵",
            :bear "🐻"
            :rabbit "r"})

(ns voting)
(defonce votes (atom {}))
(defn vote [name]
  (swap! votes update-in [name] (fnil inc 0)))

(ns display
  (:require emoji clojure.string))
(defn- repeating [n char]
  (clojure.string/join (repeat n char)))
(defn display [votes]
  (reduce-kv
    (fn [_ k v]
      (println (name k) "\t"
               (repeating v (k emoji/items))))
    nil votes))

(ns user
  (:require voting display))

(voting/vote :horse)
(voting/vote :horse)
(voting/vote :horse)
(voting/vote :monkey)
(voting/vote :monkey)
(voting/vote :bear)

(display/display @voting/votes)
