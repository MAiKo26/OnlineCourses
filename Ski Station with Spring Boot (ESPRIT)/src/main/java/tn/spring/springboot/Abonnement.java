package tn.spring.springboot;

import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import lombok.extern.slf4j.XSlf4j;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.Set;

@Entity
@Data
@Slf4j
@Table(name = "Abonnement")
public class Abonnement implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="idAbonnement")
    private Integer idAbonnement ;
    private long numAbon ;
    @Temporal (TemporalType.DATE)
    private Date dateDebut;
    @Temporal (TemporalType.DATE)
    private Date dateFin;
    private float prixAbon ;
    private TypeAbonnement typeAbon ;

    @OneToOne(mappedBy = "Abonn")
    private Skieur skieur ;


    public Integer getIdAbonnement() {
        return idAbonnement;
    }

    public void setIdAbonnement(Integer idAbonnement) {
        this.idAbonnement = idAbonnement;
    }

    public long getNumAbon() {
        return numAbon;
    }

    public void setNumAbon(long numAbon) {
        this.numAbon = numAbon;
    }

    public Date getDateDebut() {
        return dateDebut;
    }

    public void setDateDebut(Date dateDebut) {
        this.dateDebut = dateDebut;
    }

    public Date getDateFin() {
        return dateFin;
    }

    public void setDateFin(Date dateFin) {
        this.dateFin = dateFin;
    }

    public float getPrixAbon() {
        return prixAbon;
    }

    public void setPrixAbon(float prixAbon) {
        this.prixAbon = prixAbon;
    }

    public TypeAbonnement getTypeAbon() {
        return typeAbon;
    }

    public void setTypeAbon(TypeAbonnement typeAbon) {
        this.typeAbon = typeAbon;
    }
}
