package com.classeapp.alula04_bola;
public class Alula04_bola {
    public static void main(String[] args) {
        Bola bolaFutebol = new Bola("Capotão","Azul",0.350f,0.3f);
        System.out.println("A bola é: "+bolaFutebol.getTipo());
        System.out.println("A cor é: "+bolaFutebol.getCor());
        System.out.println("O peso é: "+bolaFutebol.getPeso());
        System.out.println("O tamanho é: "+bolaFutebol.getTamanho());
    }
}
