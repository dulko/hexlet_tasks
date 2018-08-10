#lang racket/base

(require rackunit)

;;процедура, которая принимает в качестве аргумента другую процедуру (которая вычисляет f), и целое положительное число n
;;и возвращает процедуру, которая вычисляет n-ное применение функции f

(define (square x) (* x x))
(define (inc x) (+ x 1))

;; BEGIN (write your solution here)
(define (compose func x counter)
    (if (= counter 1) (func x) (compose func (func x) (- counter 1)))
)
(define (repeated func n) 
    (lambda (x) (compose func x n))
)
;; END

(check-equal? ((repeated inc 2) 5) 7)
(check-equal? ((repeated inc 10) 10) 20)
(check-equal? ((repeated square 2) 5) 625)
(check-equal? ((repeated square 3) 3) 6561)


