import re  

def cartao_valido(numero_cartao):
    
    numero_cartao = re.sub(r'\D', '', numero_cartao)
    
    n_digits = len(numero_cartao)

    soma = 0
    
    segudo_numero = False

    for i in range(n_digits - 1, -1, -1):
        d = int(numero_cartao[i])  

        if segudo_numero:
            d *= 2
            if d > 9:
                d -= 9

        soma += d

        segudo_numero = not segudo_numero

    return soma % 10 == 0
