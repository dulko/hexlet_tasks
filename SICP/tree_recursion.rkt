#lang racket/base

(require rackunit)

;; f(n) = n if n < 3, and f(n) = f(n - 1) + 2f(n - 2) + 3f(n - 3) if n >= 3.

;; BEGIN (write your solution here)
(define (! n)
  (if (= n 1) 1
    (* n (! (- n 1)))
  )
)

(define (pascal-triangle n m)
(cond ((or (= n 1) (= n 2) (= n m) (= m 1)) 1)
      ((or (= m 2) (= (- n 1) m)) (- n 1))
      (else (/ (! (- n 1)) (* (! (- m 1)) (! (- n m)))) )
)
)

;; END

(check-equal? (pascal-triangle 1 1) 1)
(check-equal? (pascal-triangle 2 2) 1)
(check-equal? (pascal-triangle 3 2) 2)
(check-equal? (pascal-triangle 4 2) 3)
(check-equal? (pascal-triangle 5 2) 4)
(check-equal? (pascal-triangle 5 3) 6)
