package com.classeapp.calculadoraimc;

public class CalculadoraImc {

    public static void main(String[] args) {
        Pessoa objetoPessoa = new Pessoa("Joao",80.7f,1.80f);
        System.out.println("O nome é: " + objetoPessoa.getNome() + " com peso de: " + objetoPessoa.getPeso() + " e a altura de: " + objetoPessoa.getAltura());
        Pessoa pessoa1 = new Pessoa("Lais",70.f,1.68f);
        System.out.println("O nome é: "+pessoa1.getNome() + " com peso de: " + pessoa1.getPeso() + " e a altura de: " + pessoa1.getAltura());
    }
}
