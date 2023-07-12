package tn.spring.springboot;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;

@Entity
@Table(name = "Inscription")
public class Inscription implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idInscription")
    private Integer idInscription ;
    private long numInscription ;
    private int numSemaine ;

    @ManyToOne
    private Skieur Skieur ;
    @ManyToOne
    private Cours cours ;

    public Integer getIdInscription() {
        return idInscription;
    }

    public void setIdInscription(Integer idInscription) {
        this.idInscription = idInscription;
    }

    public long getNumInscription() {
        return numInscription;
    }

    public void setNumInscription(long numInscription) {
        this.numInscription = numInscription;
    }

    public int getNumSemaine() {
        return numSemaine;
    }

    public void setNumSemaine(int numSemaine) {
        this.numSemaine = numSemaine;
    }
}
