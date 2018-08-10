#lang racket/base

(require rackunit)

;; BEGIN (write your solution here)
(define (sum-of-squares-of-top-two a b c)
  (define (square_sum x y) (+ (* x x) (* y y)))
  (cond ((and (< a b) (< a c)) (square_sum b c))
        ((and (< b a) (< b c)) (square_sum a c))
        ((and (< c a) (< c b)) (square_sum a b)))
)
;; END

(check-equal? (sum-of-squares-of-top-two 1 2 3) 13)
(check-equal? (sum-of-squares-of-top-two 3 4 2) 25)
(check-equal? (sum-of-squares-of-top-two 5 3 4) 41)
